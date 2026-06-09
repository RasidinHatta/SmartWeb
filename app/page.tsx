import type { Metadata } from "next"
import { Hero } from "@/components/home/Hero"
import { Overview } from "@/components/home/Overview"
import { FeatureGrid } from "@/components/home/FeatureGrid"
import { ClientLogos } from "@/components/home/ClientLogos"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { FAQSection } from "@/components/home/FAQSection"

export const metadata: Metadata = {
  title: "Smart Touch Technology — Malaysia's Complete Workforce Automation",
  description:
    "Integrated Payroll, HRMS & Time Attendance Software trusted by 2,500+ factories, offices, and condominiums across Malaysia.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Overview />
      <FeatureGrid />
      <ClientLogos />
      <WhyChooseUs />
      <FAQSection />
    </>
  )
}
