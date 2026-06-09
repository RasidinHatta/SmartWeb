"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const trustPoints = [
  "LHDN & KWSP Approved",
  "2,500+ Malaysian Businesses",
  "20+ Years Experience",
]

export function Hero() {
  const reduced = useReducedMotion()

  const fadeUp = (delay = 0) => ({
    initial: reduced ? {} : { opacity: 0, y: 20 },
    animate: reduced ? {} : { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  })

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg-secondary py-20 text-foreground dark:bg-brand-darkest dark:text-white sm:py-24">
      {/* Geometric dot grid using brand accent tones */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--brand-accent) 40%, transparent) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft glow orbs */}
      <div className="pointer-events-none absolute -top-40 right-0 size-[500px] rounded-full bg-brand-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 size-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div {...fadeUp(0)}>
            <Badge className="mb-6 border-brand-accent/30 bg-brand-accent/10 text-brand-accent hover:bg-brand-accent/15">
              Malaysia&apos;s Leading HR Automation Platform
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-foreground dark:text-white sm:text-6xl lg:text-7xl"
          >
            Integrated Payroll,{" "}
            <span className="text-brand-accent">HRMS &amp; Time Attendance</span>{" "}
            Software
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground dark:text-white/70 sm:text-xl"
          >
            Seamlessly sync facial recognition, turnstiles, and shift rostering with
            LHDN-compliant payroll. Trusted by 2,500+ factories, offices, and
            condominiums across Malaysia.
          </motion.p>

          {/* Trust points */}
          <motion.ul
            {...fadeUp(0.3)}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-muted-foreground dark:text-white/60">
                <CheckCircle2 className="size-4 text-brand-accent shrink-0" />
                {point}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              render={<Link href="/contact" />}
              size="lg"
              className="bg-brand-accent hover:bg-brand text-white border-0 shadow-lg h-12 px-6 font-medium"
            >
              Book a Demo
              <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button
              render={<Link href="/products" />}
              size="lg"
              className="h-12 border border-border bg-bg-primary px-6 font-medium text-foreground shadow-sm hover:bg-bg-surface dark:border-white/25 dark:bg-white/8 dark:text-white dark:hover:bg-white/15"
            >
              Start Your Payroll Automation
            </Button>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 24 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { value: "2,500+", label: "Clients Nationwide" },
            { value: "20+", label: "Years Experience" },
            { value: "2004", label: "Founded in Malaysia" },
            { value: "LHDN", label: "Compliant & Approved" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-bg-primary p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none"
            >
              <p className="text-2xl font-bold text-brand-accent sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground dark:text-white/50 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
