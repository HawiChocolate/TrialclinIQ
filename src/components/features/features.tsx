"use client";

import { useRef, useState } from "react";
import { Stethoscope, Pill, Dna, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";

const FEATURES = [
  { icon: Stethoscope, title: "Book visits in seconds", description: "See real-time availability from your care team. Reschedule or cancel with one tap — no phone tag." },
  { icon: Pill, title: "Prescriptions, simplified", description: "Refill requests, dosage reminders, and interaction alerts — all in one clean, readable timeline." },
  { icon: Dna, title: "Insights that matter", description: "Trends across vitals, labs, and wearables. Understand your health at a glance, not in a spreadsheet." },
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -100 && activeIndex < FEATURES.length - 1) setActiveIndex(activeIndex + 1);
    else if (x >= 100 && activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  return (
    <section className="relative w-full bg-[#0a192f] py-24 overflow-hidden text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Care that fits into your day.
        </h2>

        {/* Carousel Viewport */}
        <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x: dragX }}
            onDragEnd={onDragEnd}
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex w-full"
          >
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = idx === activeIndex;

              return (
                <div key={idx} className="w-full shrink-0 px-4 md:px-6">
                  <article
                    className={`p-8 rounded-3xl border transition-all duration-500 h-full ${
                      isActive 
                      ? "border-teal-500/50 bg-[#112240] shadow-glow" 
                      : "border-gray-800 bg-[#0a192f]"
                    }`}
                  >
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-500/10 text-teal-400">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-2xl font-medium">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </article>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-between px-6">
          <div className="flex gap-2">
            {FEATURES.map((feature, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                title={`Show ${feature.title}`}
                aria-label={`Show ${feature.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-teal-500" : "w-2 bg-gray-600"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              disabled={activeIndex === 0}
              title="Show previous feature"
              aria-label="Show previous feature"
              className="p-3 rounded-full border border-gray-700 hover:border-teal-500 transition-colors disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActiveIndex(Math.min(FEATURES.length - 1, activeIndex + 1))}
              disabled={activeIndex === FEATURES.length - 1}
              title="Show next feature"
              aria-label="Show next feature"
              className="p-3 rounded-full border border-gray-700 hover:border-teal-500 transition-colors disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}