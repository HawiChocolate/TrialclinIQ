"use client";

import { useRef, useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Pill,
  Activity,
  Sparkles,
  ShieldCheck,
  Bell,
} from "lucide-react";

interface CardItem {
  title: string;
  body: string;
  icon: React.ReactNode;
  shadowColor: string;
  glowBg: string;
  accentBorder: string;
  accentGlow: string;
}

const carouselCards: CardItem[] = [
  {
    title: "Book visits in seconds",
    body: "See real-time availability from your care team. Reschedule or cancel with one tap — no phone tag.",
    icon: <Stethoscope className="w-6 h-6 text-teal-400" />,
    shadowColor: "0 0 25px rgba(45, 212, 191, 0.15)",
    glowBg: "radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, transparent 70%)",
    accentBorder: "border-teal-500/10 hover:border-teal-500/30",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(45,212,191,0.15)]",
  },
  {
    title: "Prescriptions, simplified",
    body: "Refill requests, dosage reminders, and interaction alerts — all in one clean, readable timeline.",
    icon: <Pill className="w-6 h-6 text-emerald-400" />,
    shadowColor: "0 0 25px rgba(52, 211, 153, 0.15)",
    glowBg: "radial-gradient(circle, rgba(52, 211, 153, 0.3) 0%, transparent 70%)",
    accentBorder: "border-emerald-500/10 hover:border-emerald-500/30",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]",
  },
  {
    title: "Insights that matter",
    body: "Trends across vitals, labs, and wearables. Understand your health at a glance, not in a spreadsheet.",
    icon: <Activity className="w-6 h-6 text-cyan-400" />,
    shadowColor: "0 0 25px rgba(34, 211, 238, 0.15)",
    glowBg: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)",
    accentBorder: "border-cyan-500/10 hover:border-cyan-500/30",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]",
  },
  {
    title: "24/7 Care Chat",
    body: "Message our care coordinators and nurses anytime. Get answers to quick questions without waiting for an appointment.",
    icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
    shadowColor: "0 0 25px rgba(129, 140, 248, 0.15)",
    glowBg: "radial-gradient(circle, rgba(129, 140, 248, 0.3) 0%, transparent 70%)",
    accentBorder: "border-indigo-500/10 hover:border-indigo-500/30",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(129,140,248,0.15)]",
  },
  {
    title: "Secure Records Vault",
    body: "HIPAA-compliant storage for all your test results, vaccine records, and medical history in one place.",
    icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    shadowColor: "0 0 25px rgba(251, 191, 36, 0.15)",
    glowBg: "radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)",
    accentBorder: "border-amber-500/10 hover:border-amber-500/30",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
  },
  {
    title: "Smart Care Alerts",
    body: "Real-time notifications for upcoming appointments, vaccine updates, and preventative screening recommendations.",
    icon: <Bell className="w-6 h-6 text-rose-400" />,
    shadowColor: "0 0 25px rgba(251, 113, 133, 0.15)",
    glowBg: "radial-gradient(circle, rgba(251, 113, 133, 0.3) 0%, transparent 70%)",
    accentBorder: "border-rose-500/10 hover:border-rose-500/30",
    accentGlow: "group-hover:shadow-[0_0_30px_rgba(251,113,133,0.15)]",
  },
];

export function FeatureCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollLimits, { passive: true });
      // Initial check
      checkScrollLimits();
      // Handle resize
      window.addEventListener("resize", checkScrollLimits);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollLimits);
      }
      window.removeEventListener("resize", checkScrollLimits);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      // Scroll by one card's width + gap
      const cardWidth = container.querySelector(".glass-card")?.getBoundingClientRect().width || 360;
      const gap = 24; // gap-6 is 24px
      const scrollAmount = cardWidth + gap;

      const newScrollLeft = direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-navy py-24 text-navy-foreground overflow-hidden relative border-t border-b border-white/5">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Why TrialCliniq
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display text-white leading-[1.1] max-w-2xl">
              Care that fits into your day,<br /> not the other way around.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-3 self-end sm:self-auto">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all focus:outline-none ${
                canScrollLeft
                  ? "bg-white/5 hover:bg-white/10 text-white cursor-pointer hover:border-white/20"
                  : "bg-white/[0.02] text-white/20 cursor-not-allowed"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all focus:outline-none ${
                canScrollRight
                  ? "bg-white/5 hover:bg-white/10 text-white cursor-pointer hover:border-white/20"
                  : "bg-white/[0.02] text-white/20 cursor-not-allowed"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-8 -mx-4 px-4 md:mx-0 md:px-0"
        >
          {carouselCards.map((card, i) => (
            <div
              key={i}
              className={`glass-card snap-start shrink-0 w-[280px] sm:w-[350px] rounded-3xl p-8 relative flex flex-col justify-between group cursor-pointer border ${card.accentBorder} ${card.accentGlow}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  {/* Glowing Icon Container */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center glow-icon-container relative"
                    style={{ boxShadow: card.shadowColor }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: card.glowBg,
                        filter: "blur(8px)",
                      }}
                    />
                    <div className="relative text-white z-10 transition-transform duration-300 group-hover:scale-110">
                      {card.icon}
                    </div>
                  </div>

                  {/* Top-Right Arrow Indicator */}
                  <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all duration-300" />
                </div>

                <h3 className="mt-8 text-xl text-white font-medium tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/50 leading-relaxed font-sans font-light">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
