import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontDisplay = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fuel and Fire Mobile Mechanic | Mobile Car Repair Mableton GA",
  description:
    "Mobile mechanic Mableton GA and Atlanta — at-home car repair for brakes, AC, diagnostics, starters/alternators and more. Fast, honest service with a 12-month/12,000-mile warranty.",
  applicationName: "Fuel and Fire Mobile Mechanic",
  keywords: [
    "mobile mechanic Mableton GA",
    "mobile mechanic Atlanta",
    "at-home car repair",
    "brakes",
    "AC repair",
    "car diagnostics",
    "starter replacement",
    "alternator replacement",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Fuel and Fire Mobile Mechanic",
    description:
      "Reliable mobile mechanic in Mableton & Atlanta. Brakes, AC, diagnostics & more — no shop hassle.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/logo1.jpg", type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel and Fire Mobile Mechanic",
    description:
      "Reliable mobile mechanic in Mableton & Atlanta. Brakes, AC, diagnostics & more — no shop hassle.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} min-h-full bg-black text-zinc-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
