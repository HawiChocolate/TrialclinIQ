"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function ContactPage() {
  const CONTAINER = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    role: "patient",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

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
            <NextLink href="/about" className="hover:text-foreground">About</NextLink>
            <NextLink href="/portal" className="hover:text-foreground">Portal</NextLink>
            <NextLink href="/contact" className="text-foreground font-semibold">Contact</NextLink>
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
      <main className="flex-grow py-12 md:py-20">
        <div className={CONTAINER}>
          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">Get In Touch</span>
                <h1 className="mt-3 text-4xl md:text-5xl font-display text-navy leading-tight">
                  Connect with TrialCliniq.
                </h1>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Have questions about patient record synchronization, QHIN integrations, or matching your community clinic to active clinical trials? Our care coordination team is here to assist.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="h-9 w-9 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs">Direct Support Email</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">hello@trialcliniq.health</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs">Coordination Hotline</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">+1 (555) 010-2040</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="h-9 w-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Clock className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs">Response Guarantee</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">24 hours or less on all inquiries</p>
                  </div>
                </div>
              </div>

              {/* Stethoscope beat sidebar graphic */}
              <div className="relative overflow-hidden rounded-3xl border border-border shadow-card h-40 group">
                <Image
                  src="/stethoscope-beat.jpg"
                  alt="Clinical support line background"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/60 backdrop-blur-[1px] flex items-center p-6 text-white">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-8 w-8 text-emerald-400" />
                    <div>
                      <h4 className="text-sm font-semibold">HIPAA-ready channels</h4>
                      <p className="text-[11px] text-white/70">All message content is fully encrypted end-to-end.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-border rounded-3xl p-6 md:p-10 shadow-sm">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="h-16 w-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      <Check className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-display text-navy">Request Received!</h2>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting TrialCliniq. Our support coordinators and integration specialists will review your submission and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setFormData({ name: "", email: "", org: "", role: "patient", message: "" });
                        setSubmitted(false);
                      }}
                      className="mt-4 text-xs font-semibold bg-navy text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
                    >
                      Submit Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-bold text-[#0d2847]">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ann Jacobs"
                          className="px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                        />
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold text-[#0d2847]">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ann@example.com"
                          className="px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="org" className="text-xs font-bold text-[#0d2847]">Organization / Clinic (Optional)</label>
                        <input
                          type="text"
                          id="org"
                          value={formData.org}
                          onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                          placeholder="Community Care Center"
                          className="px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="role" className="text-xs font-bold text-[#0d2847]">I am a...</label>
                        <select
                          id="role"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
                        >
                          <option value="patient">Patient looking for portal support</option>
                          <option value="provider">Clinician / Care Coordinator</option>
                          <option value="researcher">Clinical Trial Sponsor / Researcher</option>
                          <option value="general">Other Inquirer</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-bold text-[#0d2847]">Your Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your request or integration inquiry here..."
                        className="px-4 py-3 rounded-xl border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-navy py-4 text-xs font-bold text-white shadow-md hover:bg-navy/90 transition disabled:opacity-70"
                    >
                      {loading ? "Sending..." : "Submit Inquiry"}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto">
        <div className={`flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row ${CONTAINER}`}>
          <div>© {new Date().getFullYear()} TrialCliniq Health. All rights reserved.</div>
          <div className="flex gap-6">
            <NextLink href="/" className="hover:text-foreground">Home</NextLink>
            <NextLink href="/features" className="hover:text-foreground">Features</NextLink>
            <NextLink href="/about" className="hover:text-foreground">About</NextLink>
            <NextLink href="/portal" className="hover:text-foreground">Portal</NextLink>
          </div>
        </div>
      </footer>

    </div>
  );
}
