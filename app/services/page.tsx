import type { Metadata } from "next"
import Link from "next/link"
import {
  Factory,
  HardHat,
  Building2,
  Home,
  Stethoscope,
  GraduationCap,
  Anchor,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { verticals, capabilities } from "@/lib/data"

export const metadata: Metadata = {
  title: "Services & Industry Solutions",
  description:
    "Smart Touch Technology serves manufacturing, construction, healthcare, schools, and more with specialised HR automation and biometric security solutions.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  HardHat,
  Building2,
  Home,
  Stethoscope,
  GraduationCap,
  Anchor,
}

const verticalColors = [
  "from-blue-50 to-blue-50/50 border-blue-100 dark:from-blue-950/20 dark:to-blue-950/10 dark:border-blue-900/50",
  "from-amber-50 to-amber-50/50 border-amber-100 dark:from-amber-950/20 dark:to-amber-950/10 dark:border-amber-900/50",
  "from-purple-50 to-purple-50/50 border-purple-100 dark:from-purple-950/20 dark:to-purple-950/10 dark:border-purple-900/50",
  "from-bg-surface to-bg-surface/50 border-border dark:from-bg-surface/50 dark:to-bg-surface/20 dark:border-border",
  "from-rose-50 to-rose-50/50 border-rose-100 dark:from-rose-950/20 dark:to-rose-950/10 dark:border-rose-900/50",
  "from-green-50 to-green-50/50 border-green-100 dark:from-green-950/20 dark:to-green-950/10 dark:border-green-900/50",
  "from-slate-50 to-slate-50/50 border-slate-100 dark:from-slate-950/20 dark:to-slate-950/10 dark:border-slate-900/50",
]

const iconColors = [
  "text-blue-600 dark:text-blue-400",
  "text-amber-600 dark:text-amber-400",
  "text-purple-600 dark:text-purple-400",
  "text-accent dark:text-brand-accent",
  "text-rose-600 dark:text-rose-400",
  "text-green-600 dark:text-green-400",
  "text-slate-600 dark:text-slate-400",
]

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industry Solutions"
            title="Tailored for Every Sector"
            description="From factory floors to hospital wards, Smart Touch Technology delivers workforce automation that fits your industry's unique requirements."
          />
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="section-padding bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {verticals.map((vertical, i) => {
              const Icon = iconMap[vertical.icon]
              return (
                <div
                  key={vertical.id}
                  className={`rounded-2xl border bg-gradient-to-br ${verticalColors[i % verticalColors.length]} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
                >
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-white/70 dark:bg-bg-primary/30 shadow-sm">
                    {Icon && <Icon className={`size-5 ${iconColors[i % iconColors.length]}`} />}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">{vertical.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {vertical.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities deep dive */}
      <section className="section-padding border-t border-border bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Core Capabilities"
            title="Everything Your Workforce Needs"
            description="Smart Touch Technology provides an integrated stack — hardware, software, and mobile — working together seamlessly."
            centered
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-border bg-bg-primary p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md dark:bg-bg-surface"
              >
                <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-darkest">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Workforce?
          </h2>
          <div className="mt-3 mx-auto h-[3px] w-10 rounded-full bg-brand-accent" />
          <p className="mt-5 text-white/60 leading-relaxed">
            Speak with our team to find the right combination of products for your industry and
            workforce size.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              render={<Link href="/contact" />}
              className="bg-brand-accent hover:bg-brand text-white border-0 h-11 px-6 font-medium"
            >
              Book a Demo <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              render={<Link href="/products" />}
              className="border border-white/25 bg-white/8 text-white hover:bg-white/15 h-11 px-6 font-medium"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
