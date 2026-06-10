import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eli Barroso Portfolio | Software Developer",
  description:
    "Portfolio of Eli Barroso, a software developer building modern web and mobile applications for business systems."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
