import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font: no third-party request to fonts.googleapis.com,
// no render-blocking <link>, and no layout shift while the font loads.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

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
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}