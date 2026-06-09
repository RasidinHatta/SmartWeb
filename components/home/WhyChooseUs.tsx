"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { whyChooseUs } from "@/lib/data"

export function WhyChooseUs() {
  const reduced = useReducedMotion()

  return (
    <section className="section-padding bg-brand-darkest">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: -20 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent">
              Our Commitment
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl leading-[1.15]">
              Why 2,500+ Businesses Choose Smart Touch
            </h2>
            <div className="mt-3 h-[3px] w-10 rounded-full bg-brand-accent" />
            <p className="mt-5 text-base text-white/60 leading-relaxed">
              For over 20 years, Smart Touch Technology has been solving real-world HR
              challenges for Malaysian businesses — with precision, reliability, and care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                render={<Link href="/contact" />}
                className="bg-brand-accent hover:bg-brand text-white border-0 h-11 px-6 font-medium"
              >
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button
                render={<Link href="/about" />}
                className="border border-white/25 bg-white/8 text-white hover:bg-white/15 h-11 px-6 font-medium"
              >
                Our Story
              </Button>
            </div>
          </motion.div>

          {/* Right: grid of reasons */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 20 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduced ? {} : { opacity: 0, y: 12 }}
                whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:border-brand-accent/30 hover:bg-brand-accent/10"
              >
                <CheckCircle2 className="mb-2 size-5 text-brand-accent" />
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-xs text-white/50 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
