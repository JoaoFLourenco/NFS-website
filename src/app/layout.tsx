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
    "Equipa de Fórmula Student da FCT NOVA - Projectamos, construímos e competimos por toda a Europa. Conheça os nossos automóveis inovadores, equipa e competições.",
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
      "pt-PT": "https://nfs-website-nine.vercel.app/pt",
      "en-US": "https://nfs-website-nine.vercel.app/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://nfs-website-nine.vercel.app",
    siteName: "Nova Formula Student",
    title: "Nova Formula Student - Equipa de Fórmula Student da FCT NOVA",
    description:
      "Equipa de Fórmula Student da FCT NOVA - Projectamos, construímos e competimos por toda a Europa com automóveis inovadores.",
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
      "Equipa de Fórmula Student da FCT NOVA - Automóveis inovadores",
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
      "Equipa de Fórmula Student da FCT NOVA - Projectamos, construímos e competimos por toda a Europa com automóveis inovadores.",
    foundingDate: "2015",
    location: {
      "@type": "Place",
      name: "Nova Formula Student - Hangar 2, Faculdade de Ciências e Tecnologia, 2829-516 Caparica, Portugal",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hangar 2, Faculdade de Ciências e Tecnologia",
        postalCode: "2829-516",
        addressLocality: "Caparica",
        addressCountry: "PT",
      },
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
