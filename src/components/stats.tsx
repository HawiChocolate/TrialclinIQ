"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/mock-data";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const step = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setN(Math.floor(eased * value));
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const format = (num: number) => {
    if (value >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (value >= 1_000) return Math.floor(num / 1_000) + "K";
    return num.toString();
  };

  return (
    <span ref={ref}>
      {format(n)}
      {suffix}
    </span>
  );
}

export function Stats() {
  const items = [
    { value: stats.patients, label: "Patients", suffix: "+" },
    { value: stats.doctors, label: "Doctors", suffix: "+" },
    { value: stats.hospitals, label: "Hospitals", suffix: "+" },
    { value: stats.appointments, label: "Appointments", suffix: "+" },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl gradient-primary p-10 text-primary-foreground shadow-glow lg:p-14">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {items.map((s) => (
              <div key={s.label}>
                <p className="font-display text-5xl font-extrabold tracking-tight lg:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider opacity-80">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}