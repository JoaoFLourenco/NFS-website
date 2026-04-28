import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nova Formula Student",
    template: "%s | Nova Formula Student",
  },
  description:
    "Equipa de Formula Student da FCT NOVA - Projetamos, construímos e competimos com carros elétricos.",
  keywords: [
    "Formula Student",
    "FCT NOVA",
    "Electric Car",
    "Engineering",
    "Nova Formula Student",
  ],
  verification: {
    google: "ae5vAYLqyussk8QxNqM_eI04QWchF1rwMqM6ZJVNxXk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${raleway.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
