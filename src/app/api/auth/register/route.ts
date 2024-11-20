import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateTicketEmailHTML } from "@/lib/email-template";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });
      
      const ticketId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      
      // Generate and send ticket email
      const emailHTML = await generateTicketEmailHTML(user, ticketId)
      

    // Send welcome email
    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: "Welcome to Event Conference",
        body: emailHTML,
      }),
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating user", error },
      { status: 400 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
