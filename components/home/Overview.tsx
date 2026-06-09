"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Heart, Brain, Smartphone } from "lucide-react"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { pillars } from "@/lib/data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Brain,
  Smartphone,
}

const pillarColors = [
  {
    bg: "bg-rose-50 dark:bg-rose-950/20",
    icon: "text-rose-600 dark:text-rose-400",
    border: "border-rose-100 dark:border-rose-900/50",
    title: "text-rose-600 dark:text-rose-400",
  },
  {
    bg: "bg-bg-surface dark:bg-bg-surface",
    icon: "text-brand-accent dark:text-brand-accent",
    border: "border-border dark:border-border",
    title: "text-brand-accent",
  },
  {
    bg: "bg-accent-light/30 dark:bg-accent-light/10",
    icon: "text-accent dark:text-accent",
    border: "border-accent-light dark:border-border",
    title: "text-accent",
  },
]

export function Overview() {
  const reduced = useReducedMotion()

  return (
    <section className="bg-bg-primary py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Smart Touch Framework"
          title="One Platform, Complete Control"
          description="Smart Touch Technology unifies your entire workforce operation — from physical hardware to digital payroll — through three integrated pillars."
          centered
        />

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid gap-6 sm:grid-cols-3"
        >
          {pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon]
            const colors = pillarColors[i]
            return (
              <div
                key={pillar.name}
                className={`rounded-2xl border ${colors.border} ${colors.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-white/70 dark:bg-bg-primary/40 shadow-sm">
                  {Icon && <Icon className={`size-6 ${colors.icon}`} />}
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {pillar.label}
                </p>
                <h3 className="mb-1 text-lg font-bold text-foreground">{pillar.name}</h3>
                <p className={`mb-3 text-sm font-medium ${colors.title}`}>{pillar.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Differentiator quote */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-accent/20 bg-bg-surface p-6 sm:p-8 dark:border-border dark:bg-bg-surface"
        >
          <p className="text-base font-medium text-foreground sm:text-lg text-center italic leading-relaxed">
            &ldquo;We don&apos;t just calculate salaries; we connect your physical hardware (fingerprint/face ID/turnstiles)
            directly to your digital operations, eliminating manual data entry and buddy punching fraud.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
