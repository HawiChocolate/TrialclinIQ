import Image from "next/image";
import NextLink from "next/link";
import { 
  Activity, 
  Pill, 
  CalendarDays, 
  Stethoscope, 
  ArrowRight, 
  Check, 
  HeartPulse, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

export default function FeaturesPage() {
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
            <NextLink href="/features" className="text-foreground font-semibold">Features</NextLink>
            <NextLink href="/about" className="hover:text-foreground">About</NextLink>
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

        {/* Hero Area */}
        <section className={`py-16 md:py-24 text-center ${CONTAINER}`}>
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">Capabilities</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-display text-navy leading-tight">
              A portal designed around your day.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Explore how TrialCliniq integrates telemetry signals, automated medical records syncing, and clinical matching alerts directly into a clean, readable dashboard.
            </p>
          </div>
        </section>

        {/* Two-Column Telemetry Features */}
        <section className={`pb-24 ${CONTAINER}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display text-navy leading-tight">Continuous Telemetry Ingestion</h2>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Through direct integration with telemetry sensors and ICU diagnostics, we collect cardiovascular and neurological signals to compile real-time, high-precision vitals history.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-5 rounded-2xl border border-border bg-card">
                  <div className="h-8 w-8 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center">
                    <HeartPulse className="h-4 w-4" />
                  </div>
                  <h4 className="mt-4 font-semibold text-slate-950 text-sm">Vitals Monitoring</h4>
                  <p className="mt-2 text-xs text-muted-foreground">Continuous monitoring of heart rate, pressure, and oxygen feeds.</p>
                </div>

                <div className="p-5 rounded-2xl border border-border bg-card">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <h4 className="mt-4 font-semibold text-slate-950 text-sm">EHR Data Vault</h4>
                  <p className="mt-2 text-xs text-muted-foreground">Zero-knowledge connection protects identity during sync cycles.</p>
                </div>
              </div>
            </div>

            {/* Stethoscope beat image (different sizes) */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-border shadow-card h-[380px] relative group">
                <Image
                  src="/stethoscope-beat.jpg"
                  alt="Clinical stethoscope telemetry"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Dynamic Cards Grid */}
        <section className="bg-navy text-navy-foreground py-20 border-t border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />
          
          <div className={CONTAINER}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Integrated Services</span>
              <h2 className="text-3xl md:text-4xl text-white font-display mt-2">Everything in one secure place</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              
              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur hover:bg-white/[0.04] transition-all">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                  <Activity className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl text-white font-display">Vitals at a glance</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">Pulse, vitals, blood pressure — all visualized as easy-to-read, calming telemetry graphs.</p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur hover:bg-white/[0.04] transition-all">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <Pill className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl text-white font-display">Never miss a dose</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">Active medication timers, drug interaction alerts, and direct local pharmacy sync.</p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur hover:bg-white/[0.04] transition-all">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-xl text-white font-display">Smart trial matches</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">Flags potential clinical trial matches based on telemetry criteria instantly.</p>
              </div>

            </div>
          </div>
        </section>

        {/* EMR tablet section */}
        <section className={`py-24 ${CONTAINER}`}>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Tablet photo */}
            <div className="overflow-hidden rounded-3xl border border-border shadow-card h-[350px] relative group lg:order-2">
              <Image
                src="/emr-tablet.jpg"
                alt="EMR Portal System"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="space-y-6 lg:order-1">
              <h2 className="text-3xl font-display text-navy leading-tight">Patient EHR Synchronizer</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Connect your EMR and laboratory accounts instantly. We securely consolidate charts, vaccination reports, specialist referral orders, and doctor notes into one timeline.
              </p>
              <ul className="space-y-3 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" /> Fast connection with major hospital systems
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" /> Full support for TEFCA standards and security
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" /> Secure document exports for doctors
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
            <NextLink href="/about" className="hover:text-foreground">About</NextLink>
            <NextLink href="/portal" className="hover:text-foreground">Portal</NextLink>
            <NextLink href="/contact" className="hover:text-foreground">Contact</NextLink>
          </div>
        </div>
      </footer>

    </div>
  );
}
