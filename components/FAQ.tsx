import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Do you really come to my home or office?",
    a: "Yep. If the repair can be done safely onsite, I’ll come to your driveway, garage, or parking lot. If it’s something that truly needs a shop (alignments, tire balancing, major transmission work), I’ll tell you straight.",
  },
  {
    q: "What areas do you serve?",
    a: `I’m based in ${site.location} and I travel around the Atlanta metro. Send your location and I’ll confirm travel time and availability.`,
  },
  {
    q: "How does pricing work?",
    a: "I quote parts + labor upfront. If we find something unexpected, I’ll pause and ask before doing anything extra. No surprise invoice, no upsell Olympics.",
  },
  {
    q: "Do you offer a warranty?",
    a: `Yes — ${site.warranty} on most repairs (parts + labor). If something isn’t right, I make it right.`,
  },
  {
    q: "How do I pay?",
    a: "Card or secure payment link. Contactless is available. If you prefer, we can also do a good old-fashioned receipt and paper trail.",
  },
  {
    q: "Can you diagnose a check engine light?",
    a: "Absolutely. I’ll scan, test, and explain the cause in plain English. A code is a clue — the diagnosis is the real job.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-black py-16 sm:py-20">
      <Container>
        <MotionInView>
          <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            FAQ
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            Quick answers before you hit the “Get a Free Quote” button.
          </p>
        </MotionInView>

        <div className="mt-10 grid gap-4">
          {faqs.map((f, idx) => (
            <MotionInView key={f.q} delay={idx * 0.04}>
              <details className="group rounded-3xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-white/20">
                <summary className="cursor-pointer list-none text-base font-extrabold text-white outline-none">
                  <span className="flex items-center justify-between gap-4">
                    {f.q}
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{f.a}</p>
              </details>
            </MotionInView>
          ))}
        </div>
      </Container>
    </section>
  );
}

