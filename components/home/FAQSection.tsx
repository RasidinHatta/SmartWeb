"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { faqs } from "@/lib/data"

export function FAQSection() {
  const reduced = useReducedMotion()

  return (
    <section className="bg-bg-secondary py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: header + CTA */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: -20 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              eyebrow="FAQ"
              title="Common Questions"
              description="Quick answers to questions Malaysian HR managers ask most often about our platform."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<Link href="/contact" />}
                className="bg-brand hover:bg-brand-darkest text-white border-0 h-11 px-6"
              >
                Book a Demo
              </Button>
              <Button
                render={<Link href="/products" />}
                variant="outline"
                className="h-11 px-6"
              >
                View All Products
              </Button>
            </div>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, x: 20 }}
            whileInView={reduced ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion multiple={false} defaultValue={["faq-0"]} className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="overflow-hidden rounded-xl border border-border bg-bg-primary shadow-sm transition-colors duration-200 data-open:border-accent/40 dark:bg-bg-surface"
                >
                  <AccordionTrigger className="px-5 py-4 text-left text-sm font-semibold text-foreground hover:bg-bg-surface hover:no-underline dark:hover:bg-bg-primary/40">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
