"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Globe, Menu, Phone, X } from "lucide-react";

import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { Container } from "@/components/Container";

const links = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  const goToHash = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    // In the mobile drawer, body scrolling is locked. If we allow the default anchor
    // behavior, the hash updates but the scroll won't happen. Close the drawer first,
    // then scroll and update the hash manually.
    e.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      const el = document.querySelector(hash);
      if (el instanceof HTMLElement) {
        // Use immediate scroll for reliability on mobile after unlocking body scroll.
        el.scrollIntoView({ behavior: "auto", block: "start" });
        window.history.replaceState(null, "", hash);
      } else {
        window.location.hash = hash;
      }
    }, 160);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <Container className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href="#top"
              className="flex items-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[rgba(255,102,0,0.45)]"
              aria-label={`${site.businessName} home`}
              onClick={() => setOpen(false)}
            >
              <Image
                src="/widelogo.jpg"
                alt="Fuel and Fire Mobile Mechanic logo"
                width={260}
                height={60}
                priority
                sizes="(min-width: 768px) 260px, 200px"
                className="h-10 w-auto rounded-md object-contain"
              />
            </a>

            {/* Links (Home sits directly next to the logo on the left) */}
            <nav className="hidden items-center gap-6 text-sm text-zinc-200 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-1 py-1 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {l.label}
              </a>
            ))}
          </nav>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label={`Call ${site.phoneDisplay}`}
            >
              <Phone className="h-4 w-4 text-brand" />
              <span className="font-semibold">{site.phoneDisplay}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-4 py-2 text-sm font-bold text-black shadow-glow transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {site.appointmentCta}
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Language"
            >
              <Globe className="h-4 w-4 text-zinc-300" />
              EN
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-zinc-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-[#0b0b0b] p-5 transition-transform",
            open ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between">
            <a
              href="#top"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/widelogo.jpg"
                alt="Fuel and Fire Mobile Mechanic logo"
                width={220}
                height={54}
                sizes="220px"
                className="h-10 w-auto rounded-md object-contain"
              />
            </a>
            <button
              type="button"
              className="rounded-md border border-white/10 bg-white/5 p-2 text-zinc-100 hover:bg-white/10"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={goToHash(l.href)}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-zinc-100 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={site.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-100"
            >
              <Phone className="h-4 w-4 text-brand" />
              Call {site.phoneDisplay}
            </a>
            <a
              href="#contact"
              onClick={goToHash("#contact")}
              className="flex items-center justify-center rounded-xl bg-brand-gradient px-4 py-3 text-sm font-extrabold text-black shadow-glow"
            >
              {site.primaryCta}
            </a>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-zinc-200"
            >
              <Globe className="h-4 w-4" />
              EN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

