import Image from "next/image";
import { CheckCircle2, MapPin, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="bg-[#070707] py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <MotionInView>
            <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              About your mechanic (that’s me)
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              I’m a local, solo mobile mechanic serving {site.serviceAreaShort}. No call center, no
              “team assigned,” no surprise add-ons. You’ll get straight answers, a clear quote, and
              the same person doing the work start-to-finish.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-300">
              Think of it like a full-service shop… except better. And you don’t have to sit under
              fluorescent lights watching daytime TV while your car “waits for a bay.”
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Sparkles className="mt-0.5 h-5 w-5 text-brand" />
                <div>
                  <div className="text-sm font-extrabold text-white">Honest pricing</div>
                  <div className="mt-1 text-sm text-zinc-300">Upfront parts + labor. Zero drama.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-brand" />
                <div>
                  <div className="text-sm font-extrabold text-white">{site.warranty}</div>
                  <div className="mt-1 text-sm text-zinc-300">Because I stand behind my work.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <MapPin className="mt-0.5 h-5 w-5 text-brand" />
                <div>
                  <div className="text-sm font-extrabold text-white">Local to Georgia</div>
                  <div className="mt-1 text-sm text-zinc-300">
                    Mableton + Atlanta metro.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand" />
                <div>
                  <div className="text-sm font-extrabold text-white">Contactless friendly</div>
                  <div className="mt-1 text-sm text-zinc-300">Pay by card or secure link.</div>
                </div>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.08} className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#111] via-black to-black p-8 shadow-glow">
              <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[rgba(255,102,0,0.22)] blur-3xl" />
              <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[rgba(255,140,0,0.18)] blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo1.jpg"
                    alt="Fuel and Fire Mobile Mechanic logo"
                    width={52}
                    height={52}
                    sizes="48px"
                    className="h-12 w-12 rounded-lg object-contain"
                  />
                  <div>
                    <div className="font-[var(--font-display)] text-lg font-extrabold text-white">
                      Fuel and Fire
                    </div>
                    <div className="text-sm font-semibold text-zinc-300">Mobile Mechanic</div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-extrabold text-white">What you can expect</div>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                    <li>• Quick scheduling (same/next day when possible)</li>
                    <li>• Photos/videos when helpful (so you see what I see)</li>
                    <li>• Clean work area + respect for your time and property</li>
                    <li>• Clear “fix now vs later” advice (no pressure)</li>
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-extrabold text-white">Coverage</div>
                  <p className="mt-2 text-sm text-zinc-300">
                    Based in {site.location}. I travel around the Atlanta metro — tell me where your
                    car is parked and what it’s doing (or not doing).
                  </p>
                </div>
              </div>
            </div>
          </MotionInView>
        </div>
      </Container>
    </section>
  );
}

