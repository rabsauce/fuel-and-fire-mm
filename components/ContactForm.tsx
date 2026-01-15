"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, Phone, MapPin, Clock3 } from "lucide-react";

import { Container } from "@/components/Container";
import { MotionInView } from "@/components/MotionInView";
import { site } from "@/lib/site";

type FormValues = {
  name: string;
  phone: string;
  email?: string;
  vehicle: string;
  issue: string;
  location: string;
  preferredTime?: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onTouched" });

  const onSubmit = handleSubmit(async (data) => {
    setStatus("sending");
    // Placeholder submit: wire EmailJS/Resend/etc. here.
    await new Promise((r) => setTimeout(r, 650));
    console.log("Contact form submit (placeholder):", data);
    setStatus("sent");
    reset();
    setTimeout(() => setStatus("idle"), 2500);
  });

  const buttonLabel = useMemo(() => {
    if (status === "sending") return "Sending…";
    if (status === "sent") return "Sent! I’ll text you back.";
    return "Send request";
  }, [status]);

  return (
    <section id="contact" className="bg-[#070707] py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <MotionInView>
            <h2 className="font-[var(--font-display)] text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Get a free quote
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
              Tell me what’s going on and where the car is parked. I’ll reply with a clear plan and
              an honest quote — faster than your coffee cools.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200 transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-brand" />
                <div>
                  <div className="font-extrabold text-white">Call/Text</div>
                  <div className="text-zinc-300">{site.phoneDisplay}</div>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                <MapPin className="h-5 w-5 text-brand" />
                <div>
                  <div className="font-extrabold text-white">Service area</div>
                  <div className="text-zinc-300">{site.serviceAreaShort}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                <Clock3 className="h-5 w-5 text-brand" />
                <div>
                  <div className="font-extrabold text-white">Hours</div>
                  <div className="text-zinc-300">{site.hours}</div>
                </div>
              </div>
            </div>
          </MotionInView>

          <MotionInView delay={0.06}>
            <form
              onSubmit={onSubmit}
              className="rounded-[32px] border border-white/10 bg-black p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name?.message}>
                  <input
                    className="input"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input
                    className="input"
                    inputMode="tel"
                    placeholder="(404) 555-1234"
                    {...register("phone", {
                      required: "Phone is required",
                      minLength: { value: 10, message: "Enter a valid phone number" },
                    })}
                  />
                </Field>
                <Field label="Vehicle" error={errors.vehicle?.message}>
                  <input
                    className="input"
                    placeholder="e.g. 2014 Honda Accord"
                    {...register("vehicle", { required: "Vehicle details are required" })}
                  />
                </Field>
                <Field label="Location" error={errors.location?.message}>
                  <input
                    className="input"
                    placeholder="Address / neighborhood"
                    {...register("location", { required: "Location is required" })}
                  />
                </Field>
              </div>

              <div className="mt-4 grid gap-4">
                <Field label="Issue" error={errors.issue?.message}>
                  <textarea
                    className="input min-h-[120px] resize-y"
                    placeholder="Describe symptoms, warning lights, sounds, when it happens…"
                    {...register("issue", { required: "Tell me what’s going on" })}
                  />
                </Field>
                <Field label="Preferred time (optional)">
                  <input
                    className="input"
                    placeholder="Today after 4pm / tomorrow morning"
                    {...register("preferredTime")}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-extrabold text-black shadow-glow transition hover:brightness-110 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {buttonLabel}
              </button>

              <p className="mt-4 text-center text-xs text-zinc-500">
                Placeholder form submit — connect EmailJS/Resend later to deliver messages.
              </p>
            </form>
          </MotionInView>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-zinc-200">{label}</span>
      <div className="mt-2">{children}</div>
      {error ? <div className="mt-1 text-xs font-semibold text-red-400">{error}</div> : null}
    </label>
  );
}

