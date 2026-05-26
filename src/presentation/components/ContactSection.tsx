"use client";

import { siteContent } from "@/config/siteContent";
import { useContactForm } from "@/presentation/hooks/useContactForm";

const fieldClassName =
  "w-full appearance-none border-0 border-b border-outline-variant bg-transparent py-4 font-body text-xl text-on-surface placeholder:text-outline outline-none ring-0 focus:border-primary-container focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0";

function createGmailComposeUrl(email: string) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
    su: "Project Inquiry from Portfolio"
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function ContactSection() {
  const { form, feedback, isSubmitting, status, updateField, submit } =
    useContactForm();

  const emailHref = createGmailComposeUrl(siteContent.directEmail);

  return (
    <section
      className="relative border-y border-outline-variant/10 bg-surface-container-low/60 px-6 py-32 backdrop-blur-md md:px-24"
      id="contact"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h4 className="mb-8 font-label text-xs uppercase tracking-[0.5em] text-primary-container">
          Initiate Session
        </h4>

        <h2 className="mb-16 font-headline text-6xl font-black tracking-tighter md:text-8xl">
          Let&apos;s Connect
        </h2>

        <form className="mx-auto max-w-2xl space-y-12" onSubmit={submit}>
          <div className="relative">
            <input
              className={fieldClassName}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Your Name"
              required
              type="text"
              value={form.name}
            />
          </div>

          <div className="relative">
            <input
              className={fieldClassName}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="Email Address"
              required
              type="email"
              value={form.email}
            />
          </div>

          <div className="relative">
            <textarea
              className={fieldClassName}
              onChange={(event) =>
                updateField("projectMessage", event.target.value)
              }
              placeholder="Tell me about your inquiry"
              required
              rows={3}
              value={form.projectMessage}
            />
          </div>

          <button
            className="w-full rounded-md bg-primary-container py-6 font-label text-sm font-black uppercase tracking-[0.3em] text-on-primary-container hover:bg-primary-fixed disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </button>

          {feedback ? (
            <p
              className={`font-body text-sm ${
                status === "success" ? "text-primary-container" : "text-error"
              }`}
              role="status"
            >
              {feedback}
            </p>
          ) : null}

          <div className="flex flex-col items-start justify-between gap-4 border-t border-outline-variant/60 pt-8 text-left md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline">
                Direct Link
              </span>

              <a
                className="font-body text-sm font-semibold text-on-surface hover:text-primary-container"
                href={emailHref}
                rel="noreferrer"
                target="_blank"
              >
                {siteContent.directEmail}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="font-label text-[10px] uppercase tracking-widest text-outline">
                Social Signal
              </span>

              <a
                className="font-body text-sm font-semibold text-on-surface hover:text-primary-container"
                href={siteContent.linkedInUrl}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>

              <a
                className="font-body text-sm font-semibold text-on-surface hover:text-primary-container"
                href={siteContent.githubUrl}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>

              <a
                className="font-body text-sm font-semibold text-on-surface hover:text-primary-container"
                href={siteContent.instagramUrl}
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
