import Image from "next/image";
import NextLink from "next/link";
import {
  HeartPulse,
  ArrowRight,
  ShieldCheck,
  Globe,
  Activity,
  Check,
  Users,
  Award,
  Mail
} from "lucide-react";

export default function AboutPage() {
  const CONTAINER = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className={`flex items-center justify-between py-4 ${CONTAINER}`}>
          <NextLink href="/" className="flex items-center">
            <Image
              src="/trialcliniq-logo.png"
              alt="TrialCliniq"
              width={118}
              height={42}
              priority
              className="h-9 w-auto"
            />
          </NextLink>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex font-medium">
            <NextLink href="/" className="hover:text-foreground">Home</NextLink>
            <NextLink href="/features" className="hover:text-foreground">Features</NextLink>
            <NextLink href="/about" className="text-foreground font-semibold">About</NextLink>
            <NextLink href="/portal" className="hover:text-foreground">Portal</NextLink>
            <NextLink href="/contact" className="hover:text-foreground">Contact</NextLink>
          </nav>
          <div className="flex items-center gap-4">
            <NextLink
              href="/portal"
              className="hidden items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground sm:inline-flex"
            >
              Login
            </NextLink>
            <NextLink
              href="/portal"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-navy-foreground hover:opacity-90 transition-opacity"
            >
              Get Started
            </NextLink>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">

        {/* Hero Section */}
        <section className={`py-16 md:py-24 ${CONTAINER}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground">
                <HeartPulse className="h-3.5 w-3.5 text-primary" />
                Community referrals & specialist tracking
              </div>
              <h1 className="text-4xl md:text-6xl leading-[1.05] tracking-tight font-display text-navy">
                Smarter Referrals for Community Care.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                TrialCliniq links community clinics, diagnostic laboratories, and hospital networks together. Using TEFCA-compliant QHIN health information networks, our software analyzes telemetry records to match patients to clinical trials and alert coordinators when specialist care is needed.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <NextLink
                  href="/portal"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-navy-foreground shadow-lg shadow-navy/20 hover:opacity-90 transition-opacity"
                >
                  Enter Patient Portal <ArrowRight className="h-4 w-4" />
                </NextLink>
                <NextLink
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted transition"
                >
                  Consultation request
                </NextLink>
              </div>
            </div>

            {/* About referrals Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-card border border-border group h-[400px] md:h-[500px] relative">
                <Image
                  src="/about-referrals.jpg"
                  alt="Neurosurgery operating room telemetry screens"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Pillars */}
        <section className="bg-navy text-navy-foreground py-20 border-t border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
          <div className={`grid gap-12 md:grid-cols-3 ${CONTAINER} relative z-10`}>

            <div className="flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-white font-display">TEFCA Network Ingestion</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Connects through major national QHIN gateways to ingest patient files securely and match profiles without violating strict HIPAA or SOC2 rules.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-white font-display">Coordinated Specialist Routing</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Flags critical anomalies in neurological and cardiovascular telemetry, dispatching urgent notifications to community care coordinators.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-medium text-white font-display">Active Trial Matchmaking</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Matches qualified community patients directly to active clinical trials, boosting local clinical enrollment and expanding access to new treatments.
              </p>
            </div>

          </div>
        </section>

        {/* EMR tablet section */}
        <section className={`py-24 ${CONTAINER}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-border shadow-card h-[350px] relative group">
              <Image
                src="/emr-tablet.jpg"
                alt="Electronic Medical Record interface on tablet"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-navy font-display leading-tight">
                Designed for clinical speed. Loved by patients.
              </h2>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Traditional portals are built for billing. TrialCliniq is built around care. We coordinate with providers to assemble an intuitive, simple view of medical history, prescriptions, and trial statuses that makes clinical documentation digestible.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" /> Full medical diagnostics dashboard
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" /> Secure EHR integration for local clinics
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" /> HIPAA-compliant data routing
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className={`flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row ${CONTAINER}`}>
          <div>© {new Date().getFullYear()} TrialCliniq Health. All rights reserved.</div>
          <div className="flex gap-6">
            <NextLink href="/" className="hover:text-foreground">Home</NextLink>
            <NextLink href="/features" className="hover:text-foreground">Features</NextLink>
            <NextLink href="/portal" className="hover:text-foreground">Portal</NextLink>
            <NextLink href="/contact" className="hover:text-foreground">Contact</NextLink>
          </div>
        </div>
      </footer>

    </div>
  );
}
