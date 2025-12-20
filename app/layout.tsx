import type { Metadata } from "next";
import {
  Arvo,
  Play,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const fontTitle = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-title",
});

const fontHeading = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const fontBody = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Sheru Group",
  description:
    "Sheru Group provides professional signage board manufacturing, LED sign boards, router cutting, laser cutting, and custom branding solutions for shops, offices, and commercial spaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fontTitle.variable} ${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
