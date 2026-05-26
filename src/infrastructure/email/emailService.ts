import type { ContactMessage } from '@/domain/contact/contactMessage';

export interface EmailService {
  sendContactMessage(message: ContactMessage): Promise<void>;
}
