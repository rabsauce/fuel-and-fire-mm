import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
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
