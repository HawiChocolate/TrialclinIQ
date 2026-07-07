import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrialCliniq — Your care, beautifully organized",
  description:
    "TrialCliniq is a warm, modern patient portal for appointments, prescriptions, and vitals — designed to make managing your health effortless.",
  authors: [{ name: "TrialCliniq" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TrialCliniq — Your care, beautifully organized",
    description: "A modern patient portal for appointments, prescriptions, and vitals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

