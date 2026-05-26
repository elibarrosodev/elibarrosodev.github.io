import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ELI_ARCHITECT | Web & Mobile Application Developer',
  description: 'Web and mobile application developer portfolio for practical business systems.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
