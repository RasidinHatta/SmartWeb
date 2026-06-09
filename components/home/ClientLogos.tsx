"use client"

import { motion, useReducedMotion } from "framer-motion"
import { clients } from "@/lib/data"

export function ClientLogos() {
  const reduced = useReducedMotion()

  return (
    <section className="border-y border-border bg-bg-primary py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={reduced ? {} : { opacity: 0 }}
          whileInView={reduced ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground"
        >
          Trusted by leading Malaysian companies
        </motion.p>

        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {clients.map((client) => (
            <div
              key={client}
              className="rounded-xl border border-border bg-bg-secondary px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-accent/40 hover:bg-accent-light/30 hover:text-foreground dark:hover:bg-accent-light/10"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
