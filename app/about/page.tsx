import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, Globe, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/shared/SectionHeader"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Smart Touch Technology — founded in 2004 by Kenny Choy, 20+ years solving real-world HR problems for Malaysian businesses with smart, scalable technology.",
}

const timeline = [
  {
    year: "1995",
    title: "The First Project",
    description:
      "Founder Kenny Choy developed his first payroll and attendance system for over 1,000 employees — sparking a lifelong passion for HR automation.",
  },
  {
    year: "2004",
    title: "Smart Touch Founded",
    description:
      "Smart Touch Technology Sdn Bhd was incorporated with a mission to solve real-world HR problems with smart, scalable technology.",
  },
  {
    year: "2009",
    title: "Biometric Authentication System (BAS)",
    description:
      "Launched BAS — facial recognition and real-time monitoring — becoming one of Malaysia's first HR software providers to integrate biometric hardware directly with payroll.",
  },
  {
    year: "2020",
    title: "SmartGoGo Mobile Platform",
    description:
      "Released SmartGoGo — a serverless, mobile-first HR app for Malaysian SMEs supporting GPS clock-in, e-leave, claims, and payslips from any device.",
  },
  {
    year: "Today",
    title: "2,500+ Clients Nationwide",
    description:
      "Trusted by factories, offices, condominiums, schools, healthcare, and construction sites across Malaysia and Singapore.",
  },
]

const philosophyPoints = [
  "Trust through precision",
  "Innovation through design",
  "Efficiency through integration",
  "Local compliance & operational transparency",
  "Employee convenience & managerial control",
  "Future scalability",
]

const milestones = [
  { icon: Calendar, value: "2004", label: "Year Founded" },
  { icon: Users, value: "2,500+", label: "Clients Served" },
  { icon: Globe, value: "20+", label: "Years in Malaysia & Singapore" },
  { icon: Award, value: "LHDN", label: "Government Approved" },
]

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-white/10 bg-brand-darkest py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
              Our Story
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              20+ Years Solving Malaysia&apos;s Real HR Problems
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Founded in 2004 by Kenny Choy, Smart Touch Technology began with a mission to
              transform Payroll, Attendance, and Leave processes through smart, scalable technology.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {milestones.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <Icon className="mb-2 size-5 text-brand-accent" />
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="mt-0.5 text-xs text-white/50">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company story */}
      <section className="section-padding bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Company Story"
                title="Born from a Real HR Challenge"
              />
              <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  It all started in 1995 when Kenny Choy developed his first payroll and attendance
                  system for over 1,000 employees. That project revealed a critical gap: Malaysian
                  businesses needed software that could handle real complexity — rotating shifts,
                  multiple statutory requirements, and diverse workforces.
                </p>
                <p>
                  In 2004, Kenny founded Smart Touch Technology Sdn Bhd with a clear mandate: build
                  systems that connect physical hardware (fingerprint readers, turnstiles, face ID) to
                  digital payroll — eliminating manual data entry and the fraud that comes with it.
                </p>
                <p>
                  With a degree in Information Management from Tamkang University and over 20 years of
                  hands-on experience across Malaysia and Singapore, Kenny built a team that shares his
                  passion for precision and client service.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="rounded-2xl border border-border bg-bg-secondary p-8">
              <h3 className="mb-6 text-xl font-semibold text-foreground">Company Philosophy</h3>
              <ul className="space-y-3">
                {philosophyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding border-t border-border bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Milestones"
            title="Our Journey"
            description="From a single payroll project to Malaysia's most trusted workforce automation platform."
            centered
          />

          <div className="relative mt-12 space-y-8">
            {/* Vertical line */}
            <div className="absolute left-[1.625rem] top-3 bottom-3 hidden w-px bg-border sm:block" />

            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6">
                {/* Year bubble */}
                <div className="relative flex size-[3.25rem] shrink-0 items-center justify-center rounded-full border-2 border-accent bg-bg-primary text-xs font-bold text-accent shadow-sm">
                  {item.year}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl border border-border bg-bg-primary p-5 shadow-sm dark:bg-bg-surface">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border bg-bg-primary">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Join 2,500+ Malaysian Businesses
          </h2>
          <div className="mt-3 mx-auto h-[3px] w-10 rounded-full bg-accent" />
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Start your workforce automation journey with Smart Touch Technology today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              render={<Link href="/contact" />}
              className="bg-brand hover:bg-brand-darkest text-white border-0 h-11 px-6"
            >
              Book a Demo <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              render={<Link href="/products" />}
              variant="outline"
              className="h-11 px-6"
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
