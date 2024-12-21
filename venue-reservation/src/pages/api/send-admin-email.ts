import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { prisma } from '@/lib/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { reservationDetails } = req.body;
    const adminLoginUrl = `${process.env.BASE_URL}/login`; 

    // Find the venue and its admin details
    const venue = await prisma.venue.findUnique({
      where: {
        id: reservationDetails.venueId
      },
      include: {
        admin: {
          select: {
            email: true,
            firstName: true,
            lastName: true
          }
        }
      }
    });

    if (!venue || !venue.admin) {
      return res.status(404).json({ message: 'Venue admin not found' });
    }

    const adminEmail = venue.admin.email;
    const adminName = `${venue.admin.firstName} ${venue.admin.lastName}`;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Format dates and times for email
    const formattedDates = reservationDetails.dates
      .map((dt: any) => {
        const date = dt.date;
        const times = dt.timeSlots.join(', ');
        return `${date}: ${times}`;
      })
      .join('\n');

    // Create email content with login button
    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: adminEmail,
      subject: `New Venue Reservation - ${reservationDetails.reservationId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #584822;">New Reservation Request</h2>
          <p>Dear ${adminName},</p>
          <p>A new reservation has been submitted for ${venue.name}.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #584822;">Reservation Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px;"><strong>Reservation ID:</strong> ${reservationDetails.reservationId}</li>
              <li style="margin-bottom: 10px;"><strong>Title:</strong> ${reservationDetails.title}</li>
              <li style="margin-bottom: 10px;"><strong>Purpose:</strong> ${reservationDetails.purpose}</li>
              <li style="margin-bottom: 10px;"><strong>Selected Dates & Times:</strong><br>${formattedDates}</li>
              <li style="margin-bottom: 10px;"><strong>Requested Amenities:</strong> ${reservationDetails.selectedAmenities?.join(', ') || 'None'}</li>
            </ul>
          </div>

          ${reservationDetails.questions.length > 0 ? `
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #584822;">Additional Information:</h3>
              <ul style="list-style: none; padding: 0;">
                ${reservationDetails.questions.map((q: any) => `
                  <li style="margin-bottom: 10px;"><strong>${q.question}:</strong> ${q.answer}</li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          <p>Please review this reservation request and take appropriate action.</p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${adminLoginUrl}" 
               style="background-color: #584822; 
                      color: white; 
                      padding: 12px 24px; 
                      text-decoration: none; 
                      border-radius: 5px; 
                      display: inline-block;">
              Login to Admin Dashboard
            </a>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
} 