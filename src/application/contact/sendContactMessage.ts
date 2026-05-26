import { validateContactMessage } from '@/domain/contact/contactValidation';
import type { EmailService } from '@/infrastructure/email/emailService';

export async function sendContactMessage(input: unknown, emailService: EmailService): Promise<void> {
  const message = validateContactMessage(input);
  await emailService.sendContactMessage(message);
}
