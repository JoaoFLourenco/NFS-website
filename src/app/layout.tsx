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
    "Equipa de Formula Student da FCT NOVA - Projetamos, construímos e competimos com carros elétricos. Conheça nossos carros elétricos inovadores, equipe e competições.",
  keywords: [
    "Formula Student",
    "FCT NOVA",
    "Electric Car",
    "Engineering",
    "Nova Formula Student",
    "Carro Elétrico",
    "Formula Student Portugal",
    "EV01",
    "Fenix Evo",
  ],
  authors: [{ name: "Nova Formula Student" }],
  creator: "Nova Formula Student",
  publisher: "Nova Formula Student",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  verification: {
    google: "ae5vAYLqyussk8QxNqM_eI04QWchF1rwMqM6ZJVNxXk",
  },
  alternates: {
    canonical: "https://nfs-website-nine.vercel.app/pt",
    languages: {
      "pt-BR": "https://nfs-website-nine.vercel.app/pt",
      "en-US": "https://nfs-website-nine.vercel.app/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://nfs-website-nine.vercel.app",
    siteName: "Nova Formula Student",
    title: "Nova Formula Student - Equipa de Formula Student da FCT NOVA",
    description:
      "Equipa de Formula Student da FCT NOVA - Projetamos, construímos e competimos com carros elétricos inovadores.",
    images: [
      {
        url: "https://nfs-website-nine.vercel.app/images/cars/EV01Render.png",
        width: 1200,
        height: 630,
        alt: "NOVA Formula Student EV01",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Formula Student",
    description:
      "Equipa de Formula Student da FCT NOVA - Carros elétricos inovadores",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nova Formula Student",
    url: "https://nfs-website-nine.vercel.app",
    logo: "https://nfs-website-nine.vercel.app/images/logo.png",
    description:
      "Equipa de Formula Student da FCT NOVA - Projetamos, construímos e competimos com carros elétricos inovadores.",
    foundingDate: "2015",
    location: {
      "@type": "Place",
      name: "FCT NOVA, Caparica, Portugal",
    },
    sameAs: [
      "https://www.instagram.com/novaformulastudent",
      "https://www.linkedin.com/company/nova-formula-student",
    ],
  };

  return (
    <html className={`${raleway.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
