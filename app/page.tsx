import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.businessName,
    description:
      "Mobile mechanic serving Mableton & Atlanta. At-home car repair for brakes, AC, diagnostics, starters/alternators and more.",
    telephone: site.phoneHref.replace("tel:", ""),
    areaServed: ["Mableton, GA", "Atlanta, GA"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mableton",
      addressRegion: "GA",
      addressCountry: "US",
    },
    offers: {
      "@type": "Offer",
      name: "Mobile mechanic services",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <PartnerLogos />
        <Services />
        <About />
        <Testimonials />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
