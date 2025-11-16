import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yousif Salman - AI Developer",
  description: "Portfolio of Yousif Salman, AI Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

