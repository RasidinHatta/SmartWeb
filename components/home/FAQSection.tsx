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
    <section className="section-padding bg-bg-secondary">
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
            <Accordion multiple={false} className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl border border-border bg-bg-primary px-5 dark:bg-bg-surface"
                >
                  <AccordionTrigger className="py-4 text-sm font-medium text-left hover:no-underline text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm text-muted-foreground leading-relaxed">
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
