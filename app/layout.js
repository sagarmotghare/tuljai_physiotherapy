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
  title: "Tuljai Physiotherapy Clinic – Healing with Care in Saoner",
  description: "Welcome to Tuljai Physiotherapy Clinic, your trusted destination for personalized rehabilitation and pain management in Saoner. Led by experienced professionals, we offer evidence-based treatments for musculoskeletal, neurological, and post-surgical conditions. Whether you're recovering from injury or seeking long-term wellness, our compassionate team is here to support your journey to better mobility and a pain-free life. Discover holistic care, modern techniques, and a healing environment designed around you.",
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
