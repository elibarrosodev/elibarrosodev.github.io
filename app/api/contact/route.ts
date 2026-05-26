import { NextResponse } from "next/server";
import { sendContactMessage } from "@/application/contact/sendContactMessage";
import { Web3FormsEmailService } from "@/infrastructure/email/web3FormsEmailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const emailService = new Web3FormsEmailService(
      process.env.WEB3FORMS_ACCESS_KEY,
      process.env.CONTACT_TO_EMAIL
    );

    await sendContactMessage(body, emailService);

    return NextResponse.json(
      { ok: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[contact-api] Failed to send portfolio contact message:", error);

    return NextResponse.json(
      { ok: false, message: "Message did not send. Please try again later." },
      { status: 500 }
    );
  }
}
