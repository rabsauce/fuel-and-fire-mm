import { Star } from "lucide-react";

import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";

const testimonials = [
  {
    quote:
      "Showed up on time, explained everything, and the price didn’t magically change mid-repair. My brakes feel brand new.",
    name: "Jasmine L.",
    detail: "Mableton, GA",
  },
  {
    quote:
      "Fixed my no-start in my apartment parking lot. Faster than the tow truck — and way less painful.",
    name: "Marcus T.",
    detail: "Decatur / Atlanta",
  },
  {
    quote:
      "AC was blowing hot air. He diagnosed it quickly, quoted it clearly, and got me cold again. Zero drama, all facts.",
    name: "Priya S.",
    detail: "Atlanta, GA",
  },
  {
    quote:
      "You can tell he takes pride in the work. Clean, professional, and he actually answered my questions without jargon.",
    name: "Chris R.",
    detail: "North Druid Hills",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[rgba(255,102,0,0.9)] text-brand" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <Container>
        <MotionInView>
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Real people. Real driveway repairs.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            I don’t do the “mystery shop invoice” thing. Here’s what locals say after we get their car
            back on the road.
          </p>
        </MotionInView>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <MotionInView key={t.name} delay={idx * 0.05}>
              <figure className="h-full rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 transition hover:border-white/20">
                <Stars />
                <blockquote className="mt-4 text-sm leading-7 text-zinc-200">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-white">
                  {t.name}{" "}
                  <span className="font-normal text-zinc-500">• {t.detail}</span>
                </figcaption>
              </figure>
            </MotionInView>
          ))}
        </div>
      </Container>
    </section>
  );
}

