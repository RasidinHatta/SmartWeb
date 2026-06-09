"use client"

import { motion, useReducedMotion } from "framer-motion"
import {
  Fingerprint,
  Calculator,
  ShieldCheck,
  Smartphone,
  Cloud,
  RefreshCw,
} from "lucide-react"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { capabilities } from "@/lib/data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Fingerprint,
  Calculator,
  ShieldCheck,
  Smartphone,
  Cloud,
  RefreshCw,
}

export function FeatureGrid() {
  const reduced = useReducedMotion()

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Smart Touch"
          title="Built for Malaysian Workforce Reality"
          description="Every feature addresses a real HR challenge faced by Malaysian manufacturers, enterprises, and service companies."
          centered
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon]
            return (
              <motion.div
                key={cap.title}
                initial={reduced ? {} : { opacity: 0, y: 24 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-border bg-bg-primary p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg dark:bg-bg-surface"
              >
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-accent-light dark:bg-accent-light transition-colors group-hover:bg-brand-accent/20 dark:group-hover:bg-brand-accent/30">
                  {Icon && <Icon className="size-5 text-accent dark:text-brand-accent" />}
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
