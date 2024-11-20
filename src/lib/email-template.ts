import QRCode from 'qrcode';

export async function generateTicketEmailHTML(user: { firstName: string; lastName: string; email: string }, ticketId: string) {
    const qrCodeDataURL = await QRCode.toDataURL(ticketId);
    console.info(qrCodeDataURL)

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Code Craft Event Ticket</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ADA4B615;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="background-color: hsl(269,88%,6%); padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">Code Craft Conference 2024</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <h2 style="color: #2d3748;">Your Ticket</h2>
            <p>Dear ${user.firstName} ${user.lastName},</p>
            <p>Thank you for registering for Event Conference 2024. Here are your ticket details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="border: 1px solid #2d3748; padding: 10px;"><strong>Name:</strong></td>
                <td style="border: 1px solid #2d3748; padding: 10px;">${user.firstName} ${user.lastName}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #2d3748; padding: 10px;"><strong>Email:</strong></td>
                <td style="border: 1px solid #2d3748; padding: 10px;">${user.email}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #2d3748; padding: 10px;"><strong>Ticket ID:</strong></td>
                <td style="border: 1px solid #2d3748; padding: 10px;">${ticketId}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #2d3748; padding: 10px;"><strong>Event Date:</strong></td>
                <td style="border: 1px solid #2d3748; padding: 10px;">December 15 - 17, 2024</td>
              </tr>
              <tr>
                <td style="border: 1px solid #2d3748; padding: 10px;"><strong>Venue:</strong></td>
                <td style="border: 1px solid #2d3748; padding: 10px;">Tech Convention Center</td>
              </tr>
            </table>
            <div style="text-align: center; margin-bottom: 20px;">
              <img src="${qrCodeDataURL}" alt="Ticket QR Code" style="max-width: 200px;">
            </div>
            <p>Please present this QR code at the event entrance for quick check-in.</p>
            <p>We look forward to seeing you at the conference!</p>
            <p>Best regards,<br>Event Conference Team</p>
          </td>
        </tr>
        <tr>
          <td style="background-color: hsl(269,88%,6%); color: #ffffff; text-align: center; padding: 10px;">
            &copy; 2024 Code Craft Conference. All rights reserved.
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}