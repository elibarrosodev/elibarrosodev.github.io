import { Resend } from 'resend';
import type { ContactMessage } from '@/domain/contact/contactMessage';
import type { EmailService } from './emailService';

export class ResendEmailService implements EmailService {
  private readonly resend: Resend;
  private readonly toEmail: string;
  private readonly fromEmail: string;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>';

    if (!apiKey) throw new Error('RESEND_API_KEY is required.');
    if (!toEmail) throw new Error('CONTACT_TO_EMAIL is required.');

    this.resend = new Resend(apiKey);
    this.toEmail = toEmail;
    this.fromEmail = fromEmail;
  }

  async sendContactMessage(message: ContactMessage): Promise<void> {
    const { error } = await this.resend.emails.send({
      from: this.fromEmail,
      to: this.toEmail,
      replyTo: message.email,
      subject: `New portfolio inquiry from ${message.name}`,
      text: buildPlainTextEmail(message),
    });

    if (error) {
      throw new Error(error.message || 'Email provider failed to send the message.');
    }
  }
}

function buildPlainTextEmail(message: ContactMessage): string {
  return [
    'New portfolio inquiry',
    '',
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    '',
    'Project message:',
    message.projectMessage,
  ].join('\n');
}
