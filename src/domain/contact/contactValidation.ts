import type { ContactMessage } from './contactMessage';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactMessage(input: unknown): ContactMessage {
  if (!isRecord(input)) {
    throw new Error('A valid message is required.');
  }

  const name = normalizeText(input.name);
  const email = normalizeText(input.email);
  const projectMessage = normalizeText(input.projectMessage);

  if (!name) throw new Error('Your name is required.');
  if (!emailPattern.test(email)) throw new Error('A valid email address is required.');
  if (projectMessage.length < 10) throw new Error('Project message must be at least 10 characters.');

  return { name, email, projectMessage };
}

function normalizeText(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
