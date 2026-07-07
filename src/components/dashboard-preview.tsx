"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Search,
  CalendarCheck,
  HeartPulse,
  Pill,
  ChevronRight,
} from "lucide-react";

const upcoming = [
  {
    title: "Cardiology",
    tag: "Follow-up",
    doctor: "Dr. Beasley",
    date: "22 Aug, 10:00 AM",
    tone: "bg-blush text-blush-foreground",
  },
  {
    title: "Check-up",
    tag: "Annual",
    doctor: "Dr. Chen",
    date: "24 Aug, 4:00 PM",
    tone: "bg-mint text-mint-foreground",
  },
  {
    title: "Lab results",
    tag: "Review",
    doctor: "Dr. Patel",
    date: "26 Aug, 2:00 PM",
    tone: "bg-sky text-sky-foreground",
  },
];

const schedule = [
  { time: "10:00", title: "Cardiology follow-up", sub: "Dr. Beasley" },
  { time: "11:30", title: "Lab draw", sub: "In-clinic" },
  { time: "13:00", title: "Nutrition chat", sub: "Video" },
  { time: "15:00", title: "Rx refill review", sub: "Pharmacy" },
];

function DashboardChrome({ children }: { children: React.ReactNode }) {
  return (
    <Card className="rounded-[1.75rem] border-border bg-card p-5 shadow-glow md:p-7">
      {children}
    </Card>
  );
}

function TopBar() {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary text-xs font-bold text-primary-foreground">
          TC
        </div>
        <span className="hidden text-sm font-semibold sm:inline">
          TrialCliniq
        </span>
      </div>
      <div className="mx-4 hidden max-w-xs flex-1 items-center gap-2 rounded-full border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground sm:flex">
        <Search className="h-3.5 w-3.5" />
        Search visits, doctors...
      </div>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground">
          <Bell className="h-3.5 w-3.5" />
        </div>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="gradient-primary text-xs font-semibold text-primary-foreground">
            AM
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

function OverviewSlide() {
  return (
    <DashboardChrome>
      <TopBar />
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Upcoming visits", value: "3", icon: CalendarCheck },
          { label: "Blood pressure", value: "118/76", icon: HeartPulse },
          { label: "Prescriptions", value: "4", icon: Pill },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-muted p-3">
            <s.icon className="h-4 w-4 text-primary" />
            <p className="mt-2 text-lg font-bold">{s.value}</p>
            <p className="text-[10px] leading-tight text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-sm font-semibold">Upcoming care</p>
          <span className="flex items-center text-xs text-primary">
            View all <ChevronRight className="h-3 w-3" />
          </span>
        </div>
        <div className="space-y-2">
          {upcoming.map((u) => (
            <div
              key={u.title}
              className="flex items-center justify-between rounded-xl border border-border p-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-[10px] font-semibold ${u.tone}`}
                >
                  {u.title.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="text-xs font-semibold">{u.title}</p>
                  <p className="text-[10px] text-muted-foreground">
                    {u.doctor} · {u.date}
                  </p>
                </div>
              </div>
              <Badge className="text-[10px]">
                {u.tag}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </DashboardChrome>
  );
}

function ScheduleSlide() {
  return (
    <DashboardChrome>
      <TopBar />
      <p className="text-xs text-muted-foreground">Today</p>
      <p className="mb-4 font-display text-lg font-semibold">
        Monday, August 22
      </p>
      <div className="space-y-3">
        {schedule.map((item) => (
          <div
            key={item.time}
            className="flex items-center gap-3 rounded-xl border border-border p-3"
          >
            <div className="flex h-8 w-14 items-center justify-center rounded-lg bg-primary/10 text-xs font-semibold text-primary">
              {item.time}
            </div>
            <div>
              <p className="text-xs font-semibold">{item.title}</p>
              <p className="text-[10px] text-muted-foreground">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardChrome>
  );
}

export function DashboardPreview() {
  return (
    <Carousel className="mx-auto w-full max-w-md">
      <CarouselContent>
        <CarouselItem>
          <OverviewSlide />
        </CarouselItem>
        <CarouselItem>
          <ScheduleSlide />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-2 border-border bg-card text-foreground" />
      <CarouselNext className="right-2 border-border bg-card text-foreground" />
    </Carousel>
  );
}