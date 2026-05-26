"use client";

import { FormEvent, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  projectMessage: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  projectMessage: ""
};

export function useContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  function updateField(field: keyof ContactFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setFeedback("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error(
        "[contact-form] NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is missing."
      );
      setStatus("error");
      setFeedback("Message did not send. Please try again later.");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("access_key", accessKey);
      formData.append("subject", "New portfolio contact message");
      formData.append("from_name", "Eli Portfolio Contact Form");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("replyto", form.email);
      formData.append("message", form.projectMessage);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || result?.success === false) {
        console.error(
          "[contact-form] Web3Forms error:",
          result?.message || response.status
        );
        setStatus("error");
        setFeedback("Message did not send. Please try again later.");
        return;
      }

      setStatus("success");
      setFeedback("Message sent. I will review your project request soon.");
      setForm(initialState);
    } catch (error) {
      console.error("[contact-form] Network error:", error);
      setStatus("error");
      setFeedback(
        "Message did not send. Please check your connection and try again."
      );
    }
  }

  return {
    form,
    status,
    feedback,
    isSubmitting: status === "submitting",
    updateField,
    submit
  };
}
