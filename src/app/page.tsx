import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  Bell,
  CalendarCheck,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Heart,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  Pill,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  ArrowRight,
  Check,
  Twitter,
  ChevronDown,
  Globe,
  HelpCircle,
  Link,
} from "lucide-react";
import { Stats } from "@/components/stats";

export const metadata: Metadata = {
  title: "TrialCliniq — A patient portal that finally feels human",
  description:
    "Book appointments, track vitals, and manage prescriptions in one warm, beautifully designed patient portal.",
};

const CONTAINER = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
        <div className={`flex items-center justify-between py-4 ${CONTAINER}`}>
          <a href="#home" className="flex items-center">
            <Image
              src="/trialcliniq-logo.png"
              alt="TrialCliniq"
              width={118}
              height={42}
              priority
              className="h-9 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#home" className="hover:text-foreground">Home</a>
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how-it-works" className="hover:text-foreground">How It Works</a>
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Patient portal coming soon"
              className="hidden cursor-not-allowed items-center gap-2 text-sm font-medium text-foreground/80 opacity-60 sm:inline-flex"
            >
              Login
              
            </button>
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Patient portal coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground"
            >
              Get Started
              
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className={`pb-16 pt-12 md:pb-24 ${CONTAINER}`}>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              A calmer way to manage your health
            </div>
            <h1 className="text-5xl leading-[1.02] md:text-7xl">
              Your care,
              <br />
              <span className="italic text-primary">beautifully</span> organized.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              TrialCliniq brings your appointments, prescriptions, vitals, and
              doctor notes together in one warm, thoughtful portal — so you can
              spend less time managing paperwork and more time feeling well.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Patient portal coming soon"
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-navy-foreground shadow-lg shadow-navy/20"
              >
                Enter my portal <ArrowRight className="h-4 w-4" />
                
              </button>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted"
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              {["HIPAA-ready", "Family accounts", "24/7 chat with care team"].map(
                (t) => (
                  <div key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {t}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroMock />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className={`pb-24 ${CONTAINER}`}>
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="text-sm text-primary">Everything in one place</div>
            <h2 className="mt-2 text-4xl md:text-5xl">Built around your day.</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
            Every screen is designed to feel like a good conversation with your
            care team — quiet, clear, and considered.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-6">
          <FeatureCard
            className="md:col-span-4 bg-mint text-mint-foreground"
            icon={<Activity className="h-5 w-5" />}
            title="Vitals at a glance"
            body="Weight, pulse, blood pressure and more — visualized as calming, easy-to-read charts you actually enjoy checking."
          />
          <FeatureCard
            className="md:col-span-2 bg-blush text-blush-foreground"
            icon={<Pill className="h-5 w-5" />}
            title="Never miss a dose"
            body="Refill reminders and one-tap orders."
          />
          <FeatureCard
            className="md:col-span-2 bg-butter text-butter-foreground"
            icon={<CalendarDays className="h-5 w-5" />}
            title="Book in seconds"
            body="Real-time availability across your care team."
          />
          <FeatureCard
            className="md:col-span-4 bg-sky text-sky-foreground"
            icon={<Stethoscope className="h-5 w-5" />}
            title="Your care team, on speed-dial"
            body="Message a nurse, share a symptom photo, or start a video visit — all from the same warm inbox."
          />
        </div>
      </section>

      {/* Portal preview strip */}
      <section id="how-it-works" className={`pb-24 ${CONTAINER}`}>
        <div className="overflow-hidden rounded-[2.5rem] border border-border bg-navy p-8 text-navy-foreground md:p-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-sm text-primary">The patient portal</div>
              <h2 className="mt-2 text-4xl text-navy-foreground md:text-5xl">
                A dashboard that <span className="italic">feels</span> like care.
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Warm colors, generous space, honest typography. No jargon, no
                clutter — just the information you need, exactly when you need it.
              </p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Open the portal <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="about" className={`pb-24 ${CONTAINER}`}>
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-10 md:grid-cols-3">
          <TrustItem icon={<Shield />} title="Private by design" body="End-to-end encryption on every message and record." />
          <TrustItem icon={<Heart />} title="Human first" body="Designed with patients and clinicians — not for spreadsheets." />
          <TrustItem icon={<Sparkles />} title="Delightfully simple" body="A portal your grandparents can use, and your teenagers actually will." />
        </div>
      </section>

      {/* About */}
      <section className={`pb-24 ${CONTAINER}`}>
        <div className="grid items-center gap-8 rounded-3xl border border-border bg-card p-10 md:grid-cols-2 md:p-14">
          <div>
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky text-sky-foreground">
              <HeartPulse className="h-5 w-5" />
            </div>
            <p className="mt-6 text-sm font-medium uppercase tracking-wide text-primary">
              About TrialCliniq
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Smarter Referrals for Community Care
            </h2>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground md:text-base">
              TrialCliniq ingests health data through TEFCA/QHIN and direct EHR
              integration to flag patients who need specialist referrals —
              alerting providers and coordinators before conditions go
              undetected. Clinical trial matching included.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/about-referrals.jpg"
              alt="Health records and referral data trending upward"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <Stats />

      {/* FAQ */}
      <section id="faq" className={`max-w-3xl pb-24 text-center ${CONTAINER}`}>
        <div className="text-sm text-primary">FAQ</div>
        <h2 className="mt-2 text-4xl md:text-5xl">
          Questions, <span className="italic text-primary">answered</span>.
        </h2>
        <div className="mt-10 space-y-3 text-left">
          {faqs.map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={`pb-16 ${CONTAINER}`}>
        <div className="overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 text-primary-foreground md:px-16">
          <h2 className="max-w-xl text-4xl text-primary-foreground md:text-5xl">
            Ready to feel calmer about your care?
          </h2>
          <p className="mt-4 max-w-lg text-primary-foreground/70">
            Join the early access list to be among the first to feel calmer,
            more informed, and in control of your care.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Patient portal coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-primary opacity-90"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border">
        <div className={`grid gap-10 py-16 md:grid-cols-4 ${CONTAINER}`}>
          <div>
            <Image
              src="/trialcliniq-logo.png"
              alt="TrialCliniq"
              width={118}
              height={42}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The modern patient portal for a calmer, more connected healthcare
              experience.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn
            title="Product"
            links={[
              { label: "Features", href: "#features" },
              { label: "How it works", href: "#how-it-works" },
              { label: "Pricing", href: "#" },
              { label: "Security", href: "#about" },
            ]}
          />
          <FooterColumn
            title="Services"
            links={[
              { label: "Appointments", href: "#" },
              { label: "Prescriptions", href: "#" },
              { label: "Lab Results", href: "#" },
              { label: "Messaging", href: "#" },
            ]}
          />
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>hello@trialcliniq.health</li>
              <li>+1 (555) 010-2040</li>
              <li>24/7 Support</li>
              <li>
                <a href="#" className="hover:text-foreground">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className={`flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground md:flex-row ${CONTAINER}`}>
            <div>© {new Date().getFullYear()} TrialCliniq Health. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const faqs = [
  {
    q: "Is my health data secure on TrialCliniq?",
    a: "Yes. Every record and message is protected with end-to-end encryption, and we follow HIPAA-grade security practices across the entire platform.",
  },
  {
    q: "Do I need my provider to be on TrialCliniq?",
    a: "No — you can create an account and start tracking your health right away. Inviting your care team simply unlocks shared records and messaging.",
  },
  {
    q: "Can I book appointments through the portal?",
    a: "Absolutely. You can see real-time availability across your care team and book, reschedule, or cancel visits in a couple of taps.",
  },
  {
    q: "Is TrialCliniq free for patients?",
    a: "Core features like appointments, messaging, and vitals tracking are free for patients. Some clinics may offer premium add-ons.",
  },
  {
    q: "Can I share access with a family member?",
    a: "Yes, you can invite family members as caregivers with permissioned access to appointments, prescriptions, and updates.",
  },
];

function HeroMock() {
  return (
    <div className="relative">
      <div className="relative rounded-3xl border border-border bg-card p-6 shadow-card lg:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Welcome back</p>
            <h3 className="font-display text-xl font-bold">Alex Morgan</h3>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full gradient-primary font-semibold text-primary-foreground">
            AM
          </div>
        </div>
        <div className="mt-6 rounded-2xl gradient-primary p-5 text-primary-foreground">
          <p className="text-xs opacity-80">Next appointment</p>
          <p className="mt-1 text-lg font-semibold">Dr. Sarah Chen · Cardiology</p>
          <div className="mt-3 flex items-center justify-between text-sm">
            <span className="inline-flex items-center gap-1.5">
              <CalendarCheck className="h-4 w-4" />
              Mar 18 · 10:30 AM
            </span>
            <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs">Confirmed</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Heart rate", value: "72", unit: "bpm", color: "text-rose-500" },
            { label: "Blood pressure", value: "118/76", unit: "", color: "text-primary" },
            { label: "Health score", value: "92", unit: "/100", color: "text-emerald-500" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-muted p-3">
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{s.label}</p>
              <p className={`mt-1 text-lg font-bold ${s.color}`}>
                {s.value}
                <span className="text-xs font-normal text-muted-foreground">{s.unit}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-border p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Today&apos;s medications</p>
            <span className="text-xs font-medium text-primary">3 of 4 taken</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-3/4 rounded-full gradient-primary" />
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -left-6 -top-6 hidden animate-float items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-card sm:flex">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
          <HeartPulse className="h-5 w-5" />
          <span className="absolute inset-0 rounded-xl bg-emerald-500/30 animate-pulse-ring" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Lab result</p>
          <p className="text-sm font-semibold">All normal ✓</p>
        </div>
      </div>
      <div
        className="absolute -bottom-6 -right-4 hidden animate-float items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-card sm:flex"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Encrypted</p>
          <p className="text-sm font-semibold">End-to-end secure</p>
        </div>
      </div>
    </div>
  );
}

const upcomingCare = [
  {
    initials: "CA",
    tone: "blush" as const,
    title: "Cardiology",
    meta: "Dr. Beasley · 22 Aug, 10:00 AM",
    badge: "Follow-up",
  },
  {
    initials: "CH",
    tone: "mint" as const,
    title: "Check-up",
    meta: "Dr. Chen · 24 Aug, 4:00 PM",
    badge: "Annual",
  },
  {
    initials: "LA",
    tone: "sky" as const,
    title: "Lab results",
    meta: "Dr. Patel · 26 Aug, 2:00 PM",
    badge: "Review",
  },
];

function DashboardPreview() {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#f4f6f8] text-foreground shadow-2xl shadow-black/30 border border-border flex flex-col font-sans">
      {/* Simulated Browser Bar / Header */}
      <div className="bg-[#0d2847] text-white px-4 py-3 flex items-center justify-between gap-4 text-xs font-medium border-b border-white/10 shrink-0">
        <div className="flex items-center gap-4">
          <span className="font-display text-base font-bold text-white tracking-tight">
            TrialClinIQ
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          {/* Notification bell with badge '2' */}
          <div className="relative cursor-pointer p-1 rounded-full hover:bg-white/10 transition">
            <Bell className="h-4 w-4 text-white" />
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[8px] font-bold text-white leading-none">
              2
            </span>
          </div>

          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-1 cursor-pointer py-1 px-2 rounded hover:bg-white/10 transition text-white/80">
            <Globe className="h-3.5 w-3.5" />
            <span>EN</span>
            <ChevronDown className="h-3 w-3" />
          </div>

          {/* Help Icon */}
          <div className="cursor-pointer p-1 rounded-full hover:bg-white/10 transition text-white/80">
            <HelpCircle className="h-4 w-4" />
          </div>

          {/* User profile dropdown info */}
          <div className="flex items-center gap-1.5 cursor-pointer py-1 px-2 rounded hover:bg-white/10 transition border border-white/10 bg-white/5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[9px] font-bold text-white shrink-0">
              AJ
            </span>
            <span className="hidden md:inline text-white/90 text-[10px]">Ann Jacobs</span>
            <ChevronDown className="h-3 w-3 text-white/60 shrink-0" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col gap-4">
        {/* Welcome message */}
        <div>
          <h3 className="font-sans text-xl font-bold text-[#0d2847]">
            Welcome, Ann Jacobs
          </h3>
          <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
            Connect your health records to unlock your full dashboard.
          </p>
        </div>

        {/* Connect My Health Records Card */}
        <div className="rounded-2xl border border-border bg-white p-4 shadow-sm flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky/15 text-sky-foreground border border-sky/20">
              <Link className="h-4.5 w-4.5 rotate-45" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-xs sm:text-sm font-semibold text-[#0d2847]">
                Connect My Health Records
              </h4>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                Link your HealthEx account to view health data and discover clinical trial matches.
              </p>
            </div>
          </div>

          {/* Alert banner with shield icon */}
          <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-3 py-2 text-[9px] sm:text-[10px] text-muted-foreground">
            <Shield className="h-4 w-4 text-primary shrink-0 opacity-70" />
            <p className="leading-relaxed">
              TrialClinIQ never stores your HealthEx credentials. HealthEx verifies your identity and controls access to your medical records.
            </p>
          </div>

          {/* Button CTA */}
          <div>
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-navy px-4 py-2 text-xs font-semibold text-navy-foreground shadow-sm hover:opacity-95 transition"
            >
              Connect Health Records
            </button>
          </div>
        </div>

        {/* Locked Grid section */}
        <div className="flex flex-col gap-3">
          {/* Row of 6 vital metrics (faded/blurred) */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 opacity-50 blur-[0.5px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-dashed border-border bg-white/70 p-2.5 text-center flex flex-col items-center justify-center min-h-[64px]"
              >
                <span className="text-[9px] font-semibold text-[#0d2847] block">
                  Vital metric
                </span>
                <span className="text-[8px] text-muted-foreground mt-1 block">
                  Connect HealthEx to view
                </span>
              </div>
            ))}
          </div>

          {/* Row of 3 large panels (faded/blurred) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 opacity-50 blur-[0.5px]">
            {[
              { title: "Last Scan" },
              { title: "Cholesterol Chart" },
              { title: "Conditions" },
            ].map((panel) => (
              <div
                key={panel.title}
                className="rounded-xl border border-dashed border-border bg-white/70 p-4 min-h-[85px] flex flex-col justify-center"
              >
                <span className="text-[10px] font-semibold text-[#0d2847] block">
                  {panel.title}
                </span>
                <span className="text-[8px] sm:text-[9px] text-muted-foreground mt-1.5 block">
                  Connect HealthEx to view
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simulated Footer */}
      <div className="bg-white border-t border-border px-4 py-3 text-center shrink-0">
        <p className="text-[9px] text-muted-foreground">
          Powered by TrialClinIQ. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-border bg-card px-6 py-4 open:shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
        {question}
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 text-sm text-muted-foreground">{answer}</p>
    </details>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="hover:text-foreground">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={`rounded-3xl p-6 md:p-8 ${className}`}>
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/60">
        {icon}
      </div>
      <h3 className="mt-6 text-2xl md:text-3xl">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{body}</p>
    </div>
  );
}

function TrustItem({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div>
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-mint-foreground">
        {icon}
      </div>
      <h3 className="mt-4 text-xl">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}