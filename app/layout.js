import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Tuljai Physiotherapy Clinic | Expert Physiotherapy in Saoner, Nagpur',
  description:
    'Get personalized physiotherapy care at Tuljai Physiotherapy Clinic in Saoner. Led by experienced therapists, we offer effective treatments for pain relief and rehabilitation. Book your appointment today!',
  keywords: [
    'Physiotherapy clinic in Saoner',
    'Best physiotherapist in Nagpur',
    'Tuljai Physiotherapy reviews',
    'Pain relief physiotherapy Saoner',
    'Dr. Bharat Motghare physiotherapist',
    'Rehabilitation center near Nagpur',
  ],
  authors: [{ name: 'Tuljai Physiotherapy Clinic' }],
  creator: 'Tuljai Physiotherapy',
  openGraph: {
    title: 'Tuljai Physiotherapy Clinic',
    description:
      'Expert physiotherapy care in Saoner, Nagpur. Book your appointment today!',
    url: 'https://tuljai-physiotherapy.vercel.app/',
    siteName: 'Tuljai Physiotherapy',
    images: [
      {
        url: '/logo-min.webp',
        width: 800,
        height: 600,
        alt: 'Tuljai Physiotherapy Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  metadataBase: new URL('https://tuljai-physiotherapy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  appleWebApp: {
    title: "Tuljai Physiotherapy Clinic",
    statusBarStyle: "default",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
