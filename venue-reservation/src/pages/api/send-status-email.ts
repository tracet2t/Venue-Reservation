import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { status, userEmail, userName, venueName, reservationDetails, adminComments } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const statusColor = status === 'Accepted' ? '#22c55e' : '#ef4444';
    const statusText = status === 'Accepted' ? 'approved' : 'rejected';

    const websiteUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      to: userEmail,
      subject: `Reservation ${statusText} - ${venueName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #584822;">Reservation Status Update</h2>
          <p>Dear ${userName},</p>
          
          <p>Your reservation for <strong>${venueName}</strong> has been <strong style="color: ${statusColor}">${statusText}</strong>.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #584822;">Reservation Details:</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px;"><strong>Title:</strong> ${reservationDetails.title}</li>
              <li style="margin-bottom: 10px;"><strong>Dates:</strong><br>
                ${reservationDetails.timeSlots.map((slot: { date: string; startTime: string; endTime: string }) => `
                  ${new Date(slot.date).toLocaleDateString()}: ${slot.startTime} - ${slot.endTime}
                `).join('<br>')}
              </li>
            </ul>
          </div>

          ${adminComments ? `
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #584822;">Admin Comments:</h3>
              <p>${adminComments}</p>
            </div>
          ` : ''}

          ${status === 'Accepted' ? `
            <p>Please make sure to arrive on time and follow all venue guidelines.</p>
          ` : `
            <p>If you have any questions about this decision, please contact us.</p>
          `}

          <div style="text-align: center; margin: 30px 0;">
            <a href="${websiteUrl}" 
               style="background-color: #584822; 
                      color: white; 
                      padding: 12px 24px; 
                      text-decoration: none; 
                      border-radius: 5px; 
                      display: inline-block;">
              Visit Our Website
            </a>
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
} 