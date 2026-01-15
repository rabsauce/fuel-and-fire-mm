import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, MapPin } from "lucide-react";

import { Container } from "@/components/Container";
import { LogoMark } from "@/components/LogoMark";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-9 w-9" />
              <div>
                <div className="font-[var(--font-display)] text-lg font-extrabold text-brand">
                  Fuel and Fire
                </div>
                <div className="text-sm font-semibold text-zinc-200">Mobile Mechanic</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              Reliable, at-home car repair in {site.serviceAreaShort}. Fast, honest service — no shop
              hassle.
            </p>
          </div>

          <div className="grid gap-2 text-sm">
            <div className="text-sm font-extrabold text-white">Quick links</div>
            <Link className="text-zinc-300 hover:text-white" href="#services">
              Services
            </Link>
            <Link className="text-zinc-300 hover:text-white" href="#about">
              About
            </Link>
            <Link className="text-zinc-300 hover:text-white" href="#contact">
              Contact
            </Link>
            <Link className="text-zinc-300 hover:text-white" href="#faq">
              FAQ
            </Link>
          </div>

          <div className="space-y-3 text-sm">
            <div className="text-sm font-extrabold text-white">Contact</div>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-zinc-300 hover:text-white"
            >
              <Phone className="h-4 w-4 text-brand" />
              {site.phoneDisplay}
            </a>
            <div className="flex items-center gap-2 text-zinc-300">
              <MapPin className="h-4 w-4 text-brand" />
              {site.location}
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-200 transition hover:bg-white/10"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-200 transition hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-200 transition hover:bg-white/10"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {site.businessName}. All rights reserved.
          </div>
          <div className="text-zinc-500">
            Built with Next.js • Tailwind • Framer Motion
          </div>
        </div>
      </Container>
    </footer>
  );
}

