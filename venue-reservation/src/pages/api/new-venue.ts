import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import prisma from '@/dbclient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the session
    const session = await getServerSession(req, res, authOptions);
    console.log('Session:', session); // Debug log

    // Check if user is authenticated
    if (!session) {
      console.log('No session found');
      return res.status(401).json({ error: 'Please sign in to continue' });
    }

    if (!session.user?.email) {
      console.log('No user email in session');
      return res.status(401).json({ error: 'Invalid session' });
    }

    // Find the user in database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    console.log('Found user:', user); // Debug log

    if (!user) {
      console.log('User not found in database');
      return res.status(401).json({ error: 'User not found' });
    }

    if (user.userType !== 'Admin') {
      console.log('User is not an admin');
      return res.status(403).json({ error: 'Only admins can create venues' });
    }

    console.log('Received request body:', req.body);

    const {
      name,
      streetName,
      district,
      province,
      type,
      capacity,
      size,
      schedule,
      features,
      images,
      questions
    } = req.body;

    // Validation checks
    const validationErrors = [];
    if (!name) validationErrors.push('Name is required');
    if (!district) validationErrors.push('District is required');
    if (!province) validationErrors.push('Province is required');
    if (!type) validationErrors.push('Type is required');
    if (!capacity) validationErrors.push('Capacity is required');
    if (!size) validationErrors.push('Size is required');
    if (!schedule) validationErrors.push('Schedule is required');

    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        error: 'Validation failed',
        details: validationErrors
      });
    }

    // Process questions and their options
    const processedQuestions = questions
      .filter((q: { text: string }) => q.text.trim() !== '')
      .map((q: { text: string; options: string[] }) => {
        console.log('Processing question:', q); // Debug log
        return {
          text: q.text,
          answerOptions: Array.isArray(q.options) && q.options.length > 0
            ? q.options.filter(opt => opt && opt.trim() !== '')
            : ['Yes', 'No']
        };
      });

    console.log('Processed questions:', processedQuestions); // Debug log

    // Create venue with questions
    const venue = await prisma.venue.create({
      data: {
        name,
        street_name: Array.isArray(streetName) ? streetName : [streetName],
        district,
        province,
        type,
        capacity: parseInt(capacity.toString()),
        size: parseInt(size.toString()),
        schedule,
        features: features.filter((feature: string) => feature.trim() !== ''),
        images: images || [],
        adminId: user.userId,
        questions: {
          create: processedQuestions
        }
      },
      include: {
        questions: {
          select: {
            id: true,
            text: true,
            venueId: true,
            reservationId: true,
            answerOptions: true
          }
        }
      }
    });

    // Log the created venue with expanded question details
    console.log('Created venue with questions:', {
      ...venue,
      questions: venue.questions.map(q => ({
        ...q,
        answerOptions: q.answerOptions // Show full array
      }))
    });

    return res.status(201).json(venue);

  } catch (error) {
    console.error('Venue creation error:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
      });
    }
    return res.status(500).json({ 
      error: 'Failed to create venue',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}