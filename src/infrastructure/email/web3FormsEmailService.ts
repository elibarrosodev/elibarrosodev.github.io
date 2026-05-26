import type { ContactMessage } from "@/domain/contact/contactMessage";
import type { EmailService } from "@/infrastructure/email/emailService";

export class Web3FormsEmailService implements EmailService {
  constructor(private readonly accessKey: string | undefined) {}

  async sendContactMessage(message: ContactMessage): Promise<void> {
    const accessKey = this.accessKey?.trim();

    if (!accessKey) {
      throw new Error("WEB3FORMS_ACCESS_KEY is required.");
    }

    const formData = new FormData();
    formData.append("access_key", accessKey);
    formData.append("subject", "New portfolio contact message");
    formData.append("from_name", "Eli Portfolio Contact Form");
    formData.append("name", message.name);
    formData.append("email", message.email);
    formData.append("replyto", message.email);
    formData.append("message", message.projectMessage);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = (await response.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;

    if (!response.ok || result?.success === false) {
      throw new Error(
        result?.message ||
          `Web3Forms request failed with status ${response.status}.`
      );
    }
  }
}
