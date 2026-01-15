import Image from "next/image";

import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";

const automakers = [
  { name: "Acura", src: "/acura.png" },
  { name: "Honda", src: "/honda.png" },
  { name: "Toyota", src: "/toyotapng.png" },
  { name: "Nissan", src: "/nissan.png" },
  { name: "Ford", src: "/ford.png" },
  { name: "BMW", src: "/bmw.png" },
  { name: "Mercedes", src: "/mercedez.png" },
  { name: "Hyundai", src: "/hyundai.png" },
  { name: "Kia", src: "/Kia.png" },
  { name: "Mazda", src: "/mazda.png" },
  { name: "Jeep", src: "/jeep.png" },
  { name: "Dodge", src: "/dodge.png" },
];

function LogoCard({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex h-14 min-w-[180px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5">
      <Image
        src={src}
        alt={`${name} logo`}
        width={140}
        height={44}
        className="h-10 w-auto object-contain opacity-90 contrast-125 grayscale-[15%] transition group-hover:opacity-100"
      />
    </div>
  );
}

export function PartnerLogos() {
  return (
    <section
      id="makes"
      aria-label="Automaker logos"
      className="border-b border-white/5 bg-[#070707] py-10"
    >
      <Container>
        <MotionInView className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-300">
              We service most cars.
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              Here’s a sample of popular makes I work on.
            </p>
          </div>
        </MotionInView>
      </Container>
      <div className="mt-6">
        <div className="fade-x">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden">
            {automakers.map((m) => (
              <div key={m.name} className="group snap-start">
                <LogoCard name={m.name} src={m.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

