"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";
import {
  Activity,
  Bell,
  Check,
  ChevronDown,
  Globe,
  Heart,
  HeartPulse,
  HelpCircle,
  Link,
  Mail,
  Pill,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  ArrowRight,
  TrendingUp,
  User,
  LogOut,
  CalendarCheck,
  Info,
} from "lucide-react";

export default function PortalDashboard() {
  const [isEhrConnected, setIsEhrConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionProgress, setConnectionProgress] = useState(0);
  
  // Medications state
  const [meds, setMeds] = useState([
    { id: 1, name: "Lisinopril (10mg)", time: "8:00 AM", taken: true },
    { id: 2, name: "Atorvastatin (20mg)", time: "8:00 PM", taken: false },
    { id: 3, name: "Metformin (500mg)", time: "12:00 PM", taken: true },
    { id: 4, name: "Omega-3 Fish Oil", time: "8:00 AM", taken: true },
  ]);

  const handleMedsToggle = (id: number) => {
    setMeds(meds.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  };

  const medsTakenCount = meds.filter(m => m.taken).length;

  const startConnection = () => {
    setIsConnecting(true);
    setConnectionProgress(0);
  };

  useEffect(() => {
    if (isConnecting) {
      const interval = setInterval(() => {
        setConnectionProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsConnecting(false);
            setIsEhrConnected(true);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isConnecting]);

  return (
    <div className="min-h-screen bg-[#f4f7f6] text-foreground flex flex-col font-sans">
      
      {/* ── PORTAL HEADER ────────────────────────────────────────── */}
      <header className="bg-navy text-navy-foreground sticky top-0 z-50 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <NextLink href="/" className="font-display text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
              Trial<span className="text-emerald-400">ClinIQ</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono font-normal">Patient Portal</span>
            </NextLink>
            <nav className="hidden md:flex items-center gap-5 text-xs text-white/60">
              <span className="text-white font-semibold border-b-2 border-emerald-400 pb-1 cursor-pointer">Dashboard</span>
              <span className="hover:text-white cursor-pointer transition-colors">Trial Matches</span>
              <span className="hover:text-white cursor-pointer transition-colors">Vitals History</span>
              <span className="hover:text-white cursor-pointer transition-colors">Documents</span>
            </nav>
          </div>

          <div className="flex items-center gap-4 text-xs">
            {/* Bell Notifications */}
            <div className="relative p-1.5 bg-white/5 hover:bg-white/10 rounded-full cursor-pointer transition-colors">
              <Bell className="h-4 w-4 text-white/95" />
              <span className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 flex items-center justify-center rounded-full bg-rose-500 text-[8px] font-bold text-white leading-none">2</span>
            </div>

            {/* User Dropdown */}
            <div className="flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 rounded-full px-3 py-1.5 cursor-pointer transition-colors">
              <span className="h-5 w-5 flex items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white uppercase">AJ</span>
              <span className="hidden sm:inline text-white/80 font-medium">Ann Jacobs</span>
              <ChevronDown className="h-3.5 w-3.5 text-white/50" />
            </div>

            {/* Back to Home */}
            <NextLink href="/" className="text-white/60 hover:text-white flex items-center gap-1 font-medium transition-colors">
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Exit</span>
            </NextLink>
          </div>
        </div>
      </header>

      {/* ── PORTAL CONTENT ───────────────────────────────────────── */}
      <main className="flex-1 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Welcome Alert */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white rounded-3xl p-6 shadow-sm border border-border">
            <div>
              <h1 className="text-2xl font-bold text-[#0d2847]">Welcome back, Ann Jacobs</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage prescriptions, track vitals, and explore specialized clinical trial opportunities.</p>
            </div>
            <div className="flex gap-2">
              <span className="text-xs bg-emerald-500/10 text-emerald-700 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> HIPAA Secured
              </span>
              <span className="text-xs bg-navy/5 text-navy font-medium px-3 py-1 rounded-full flex items-center gap-1">
                Patient ID: TC-39402
              </span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            
            {/* LEFT 2 COLUMNS: EHR SYNC & METRICS */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* EHR Connection Panel */}
              <div className="rounded-3xl border border-border bg-white p-6 md:p-8 shadow-sm flex flex-col gap-5 relative overflow-hidden">
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-emerald-500/5 to-transparent pointer-events-none" />
                
                <div className="flex gap-4 items-start relative z-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8f0fe] border border-blue-100">
                    <Link className="h-6 w-6 text-[#3b5bdb] rotate-45 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#0d2847]">Connect My Health Records</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      Link your local HealthEx EHR provider to load clinical telemetry, scan records, and match active clinical trials.
                    </p>
                  </div>
                </div>

                {!isEhrConnected ? (
                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-start gap-2.5 rounded-2xl bg-[#f8f9fa] border border-[#e9ecef] px-4 py-3">
                      <Shield className="h-4 w-4 text-[#0d2847]/50 shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        TrialClinIQ uses a zero-knowledge connection to QHIN networks. We never store or log your credentials. Access is governed under TEFCA specifications.
                      </p>
                    </div>

                    {isConnecting ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground font-medium">
                          <span>Connecting to HealthEx QHIN gateway...</span>
                          <span>{connectionProgress}%</span>
                        </div>
                        <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 rounded-full transition-all duration-200"
                            style={{ width: `${connectionProgress}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={startConnection}
                        className="self-start inline-flex items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-navy/90 transition"
                      >
                        Connect via HealthEx Sync
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200/60 relative z-10 animate-fade-in">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                        <Check className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-emerald-800">HealthEx Sync Active</p>
                        <p className="text-[10px] text-emerald-600 font-medium">Synced today at {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsEhrConnected(false)}
                      className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 px-3 py-1.5 rounded-xl self-start sm:self-auto transition"
                    >
                      Disconnect EHR
                    </button>
                  </div>
                )}
              </div>

              {/* Vitals Grid */}
              <div>
                <h3 className="text-base font-bold text-[#0d2847] mb-4 flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-rose-500" />
                  Clinical Vitals Tracking
                </h3>

                <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 transition-all duration-500 ${!isEhrConnected ? "opacity-60" : "opacity-100"}`}>
                  
                  {/* Heart Rate Vitals */}
                  <div className="bg-white p-5 rounded-3xl border border-border shadow-sm flex flex-col justify-between h-[150px] relative group hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Heart Rate</span>
                      <Heart className={`h-5 w-5 text-rose-500 ${isEhrConnected ? "animate-pulse" : ""}`} />
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold font-display text-navy">{isEhrConnected ? "72" : "—"}</span>
                        <span className="text-xs text-muted-foreground font-normal">bpm</span>
                      </div>
                      <span className="text-[10px] text-emerald-500 flex items-center gap-0.5 mt-1 font-medium">
                        <TrendingUp className="h-3 w-3" /> Normal (Resting)
                      </span>
                    </div>
                    {!isEhrConnected && (
                      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center rounded-3xl p-3 text-center">
                        <span className="text-[10px] font-medium text-slate-500">Connect EHR to stream</span>
                      </div>
                    )}
                  </div>

                  {/* Blood Pressure Vitals */}
                  <div className="bg-white p-5 rounded-3xl border border-border shadow-sm flex flex-col justify-between h-[150px] relative group hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Blood Pressure</span>
                      <Activity className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold font-display text-navy">{isEhrConnected ? "118/76" : "—"}</span>
                        <span className="text-xs text-muted-foreground font-normal">mmHg</span>
                      </div>
                      <span className="text-[10px] text-emerald-500 flex items-center gap-0.5 mt-1 font-medium">
                        <Check className="h-3 w-3" /> Optimal Range
                      </span>
                    </div>
                    {!isEhrConnected && (
                      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center rounded-3xl p-3 text-center">
                        <span className="text-[10px] font-medium text-slate-500">Connect EHR to stream</span>
                      </div>
                    )}
                  </div>

                  {/* Blood Oxygen */}
                  <div className="bg-white p-5 rounded-3xl border border-border shadow-sm flex flex-col justify-between h-[150px] relative group hover:shadow-md transition">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">SpO2 (Oxygen)</span>
                      <Stethoscope className="h-5 w-5 text-teal-500" />
                    </div>
                    <div className="mt-3">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold font-display text-navy">{isEhrConnected ? "98" : "—"}</span>
                        <span className="text-xs text-muted-foreground font-normal">%</span>
                      </div>
                      <span className="text-[10px] text-emerald-500 flex items-center gap-0.5 mt-1 font-medium">
                        <Check className="h-3 w-3" /> Safe Level
                      </span>
                    </div>
                    {!isEhrConnected && (
                      <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center rounded-3xl p-3 text-center">
                        <span className="text-[10px] font-medium text-slate-500">Connect EHR to stream</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Vitals Imagery Grid */}
                {isEhrConnected && (
                  <div className="mt-6 grid grid-cols-2 gap-4 animate-fade-in">
                    <div className="rounded-3xl border border-border overflow-hidden relative h-36">
                      <Image
                        src="/heart-pulse.jpg"
                        alt="EHR Cardiac diagnostics"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <div>
                          <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider font-mono">Cardiac Imaging</p>
                          <h4 className="text-xs font-semibold text-white">Left ventricle stroke rate stable</h4>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-border overflow-hidden relative h-36">
                      <Image
                        src="/icu-monitor.jpg"
                        alt="ICU vitals feed"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                        <div>
                          <p className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider font-mono">Telemetry History</p>
                          <h4 className="text-xs font-semibold text-white">Continuous telemetry sync active</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: MED TRACKER & TRIAL MATCHES */}
            <div className="space-y-8">
              
              {/* Daily Medication Tracker */}
              <div className="bg-white border border-border rounded-3xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-[#0d2847] flex items-center gap-2">
                    <Pill className="h-4.5 w-4.5 text-emerald-500" />
                    Medication Tracker
                  </h3>
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-bold font-mono">
                    {medsTakenCount} of {meds.length} Taken
                  </span>
                </div>

                <div className="mt-3 space-y-2.5">
                  {meds.map((m) => (
                    <div 
                      key={m.id}
                      onClick={() => handleMedsToggle(m.id)}
                      className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition ${
                        m.taken 
                          ? "bg-emerald-50/50 border-emerald-100 text-slate-800" 
                          : "bg-white border-slate-100 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-5 w-5 rounded-lg border flex items-center justify-center transition-colors ${
                          m.taken 
                            ? "bg-emerald-500 border-emerald-500 text-white" 
                            : "border-slate-300"
                        }`}>
                          {m.taken && <Check className="h-3.5 w-3.5" />}
                        </div>
                        <div>
                          <p className={`text-xs font-semibold ${m.taken ? "line-through text-slate-400" : ""}`}>{m.name}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">{m.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Trial Matchmaking */}
              <div className="bg-white border border-border rounded-3xl p-6 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-[#0d2847] flex items-center gap-2">
                    <Sparkles className="h-4.5 w-4.5 text-amber-500" />
                    Trial Matches
                  </h3>
                  <span className="text-[10px] bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded-full font-semibold">
                    {isEhrConnected ? "2 Matches Found" : "Locked"}
                  </span>
                </div>

                {!isEhrConnected ? (
                  <div className="text-center py-6">
                    <Info className="h-8 w-8 text-amber-500/40 mx-auto" />
                    <p className="text-xs font-semibold text-slate-700 mt-3">Connection Required</p>
                    <p className="text-[11px] text-muted-foreground mt-1 max-w-[200px] mx-auto leading-relaxed">
                      Connect your health records to run the TrialClinIQ automated matchmaking scanner.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3.5 animate-fade-in">
                    <div className="p-3.5 rounded-2xl border border-amber-200/60 bg-amber-50/40 flex flex-col justify-between gap-2.5">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] bg-amber-500/20 text-amber-800 font-bold uppercase px-1.5 py-0.5 rounded">High Probability</span>
                          <span className="text-[9px] text-amber-600 font-semibold font-mono">ID: TRI-4019</span>
                        </div>
                        <h4 className="text-xs font-bold text-[#0d2847] mt-1.5">Community Hypertension Study</h4>
                        <p className="text-[10px] text-slate-500 mt-1">Evaluating new non-invasive telehealth monitoring tools for high blood pressure.</p>
                      </div>
                      <button className="text-[10px] bg-navy text-white font-bold py-1.5 px-3 rounded-xl hover:opacity-90 self-start transition">
                        View Details
                      </button>
                    </div>

                    <div className="p-3.5 rounded-2xl border border-emerald-200/60 bg-emerald-50/20 flex flex-col justify-between gap-2.5">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-800 font-bold uppercase px-1.5 py-0.5 rounded">Specialist Match</span>
                          <span className="text-[9px] text-emerald-600 font-semibold font-mono">ID: TRI-8293</span>
                        </div>
                        <h4 className="text-xs font-bold text-[#0d2847] mt-1.5">Brain & Spine Neurological Study</h4>
                        <p className="text-[10px] text-slate-500 mt-1">Observation study on MRI patterns with San Antonio Brain & Spine specialists.</p>
                      </div>
                      <button className="text-[10px] bg-navy text-white font-bold py-1.5 px-3 rounded-xl hover:opacity-90 self-start transition">
                        View Details
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* ── PORTAL FOOTER ────────────────────────────────────────── */}
      <footer className="bg-white border-t border-border py-4 mt-12 shrink-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] text-muted-foreground">
          <p>© {new Date().getFullYear()} TrialClinIQ Health. Zero-knowledge encrypted EMR telemetry sync.</p>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Security Policy</span>
            <span className="hover:underline cursor-pointer">Support Desk</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
