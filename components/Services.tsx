import { BatteryCharging, Disc3, Gauge, KeyRound, Snowflake, Wrench, ScanSearch, Droplets } from "lucide-react";

import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";

const services = [
  {
    title: "Diagnostics (Check Engine Light)",
    blurb:
      "I’ll scan, test, and actually explain what’s going on—no mystery codes, no upsells.",
    price: "From $99",
    Icon: ScanSearch,
  },
  {
    title: "Brake Service (Pads/Rotors)",
    blurb:
      "Quiet stops, strong pedal feel. I’ll quote parts + labor upfront before I touch a bolt.",
    price: "From $189/axle",
    Icon: Disc3,
  },
  {
    title: "AC Repair & Recharge",
    blurb:
      "Cold air again—fast. Leak checks, recharges, and component replacement when needed.",
    price: "From $129",
    Icon: Snowflake,
  },
  {
    title: "Starter & No-Start",
    blurb:
      "Car won’t crank? I’ll test battery/charging/starter and fix the real culprit.",
    price: "Quote after test",
    Icon: KeyRound,
  },
  {
    title: "Alternator & Electrical",
    blurb:
      "Dim lights, dead battery, weird electrical stuff—I handle alternators, batteries, wiring basics.",
    price: "From $219",
    Icon: BatteryCharging,
  },
  {
    title: "Oil & Fluid Service",
    blurb:
      "Oil changes, coolant, brake fluid, and basic leaks. Clean work, clean driveway.",
    price: "From $79",
    Icon: Droplets,
  },
  {
    title: "Tune-Ups (Plugs/Coils)",
    blurb:
      "Misfire, rough idle, poor MPG—fresh ignition parts can make your car feel brand new.",
    price: "From $149",
    Icon: Gauge,
  },
  {
    title: "General Repairs & Maintenance",
    blurb:
      "If it’s routine and can be done safely onsite, I can usually knock it out in your driveway.",
    price: "Ask me",
    Icon: Wrench,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-black py-16 sm:py-20">
      <Container>
        <MotionInView>
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Services I bring to your driveway
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            I’m a solo mobile mechanic with 10+ years of hands-on experience. What that means for you:
            one person, one standard, one honest quote — faster than the shop can find your keys.
          </p>
        </MotionInView>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <MotionInView key={s.title} delay={idx * 0.04} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:-translate-y-1 hover:border-white/20 hover:bg-[#0f0f0f]">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[rgba(255,102,0,0.22)] opacity-0 blur-2xl transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                    <s.Icon className="h-6 w-6 text-brand" />
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-zinc-200">
                    {s.price}
                  </div>
                </div>

                <h3 className="mt-5 text-base font-extrabold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{s.blurb}</p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="mt-4 text-xs text-zinc-500">
                  Transparent pricing • Contactless available • Parts & labor explained
                </p>
              </div>
            </MotionInView>
          ))}
        </div>
      </Container>
    </section>
  );
}

