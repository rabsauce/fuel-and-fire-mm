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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://fuel-and-fire-mm.vercel.app"),
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
    url: "/",
    images: [
      {
        url: "/logo1.jpg",
        width: 1200,
        height: 630,
        alt: "Fuel and Fire Mobile Mechanic",
      },
    ],
  },
  icons: {
    icon: [{ url: "/logo1.jpg", type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuel and Fire Mobile Mechanic",
    description:
      "Reliable mobile mechanic in Mableton & Atlanta. Brakes, AC, diagnostics & more — no shop hassle.",
    images: ["/logo1.jpg"],
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
