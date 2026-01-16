"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Clock3, Shield, Sparkles } from "lucide-react";

import { site } from "@/lib/site";
import { Container } from "@/components/Container";

const heroImage =
  "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=2400&q=80";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="relative h-[92vh] min-h-[680px] w-full">
        <Image
          src={heroImage}
          alt="Mechanic working under a car"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />

        <Container className="relative flex h-full flex-col justify-center pt-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200"
            >
              <Sparkles className="h-4 w-4 text-brand" />
              Faster fixes than your coffee cools • Honest work, zero drama
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.06 }}
              className="mt-5 font-[var(--font-display)] text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Reliable Mobile Mechanic — We Come to You in{" "}
              <span className="text-brand">{site.serviceAreaShort}</span>!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
              className="mt-5 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg"
            >
              Fast, honest repairs at your home/office. Brakes, AC, diagnostics & more —
              no shop hassle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-6 py-3 text-sm font-extrabold text-black shadow-glow transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {site.primaryCta}
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                Call {site.phoneDisplay}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
              className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                <Shield className="h-5 w-5 text-brand" />
                <div className="text-xs leading-5 text-zinc-200">
                  <div className="font-bold text-white">{site.warranty}</div>
                  Backed repairs
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                <BadgeCheck className="h-5 w-5 text-brand" />
                <div className="text-xs leading-5 text-zinc-200">
                  <div className="font-bold text-white">20–40% savings</div>
                  vs. typical shops
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
                <Clock3 className="h-5 w-5 text-brand" />
                <div className="text-xs leading-5 text-zinc-200">
                  <div className="font-bold text-white">Contactless options</div>
                  Pay by card/link
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

      </div>
    </section>
  );
}

