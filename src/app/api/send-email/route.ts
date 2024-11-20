import { sendEmail } from "@/app/lib/email";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { to, subject, body } = await request.json();

  try {
    // In a real-world scenario, you would use a service like SendGrid, Mailgun, or AWS SES
    // For this example, we'll just log the email details
    console.log(`Sending email to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);

    const result = await sendEmail({ to, subject, text: body, html: body });
    if (result.success) {
      return NextResponse.json({ message: "Email sent successfully" });
    } else {
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in email route:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
