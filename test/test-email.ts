import { sendEmail } from "@/app/lib/email";
import { generateTicketEmailHTML } from "@/lib/email-template";

async function testEmail() {
  const ticketId =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  const htmlEmail = await generateTicketEmailHTML(
    {
      firstName: "Chinaza",
      lastName: "Ojimadu",
      email: "chisamantha11@gmail.com",
    },
    ticketId
  );
  try {
    const result = await sendEmail({
      to: "chisamantha11@gmail.com",
      subject: "Thank you for registering for the Code Craft Conference 2024",
      text: htmlEmail,
      html: htmlEmail,
    });
    console.log("Email test result:", result);
  } catch (error) {
    console.error("Error testing email:", error);
  }
}

testEmail();
