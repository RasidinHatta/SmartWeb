import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { products, pricingModules } from "@/lib/data"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Smart Touch Technology's complete suite of HR, payroll, attendance, and security products including SmartPAL, SmartGoGo, Canteen System, and Dormitory Management.",
}

export default function ProductsPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Products"
            title="Complete HR & Security Solutions"
            description="From payroll automation to biometric access control — every product integrates seamlessly to give you one unified view of your workforce."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {["SmartPAL Suite", "SmartGoGo", "Canteen System", "Dormitory System", "VMS"].map(
              (tag) => (
                <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                  {tag}
                </Badge>
              )
            )}
          </div>
        </div>
      </section>

      {/* Products list */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 space-y-20">
        {products.map((product, i) => (
          <section key={product.id} id={product.id} className="scroll-mt-20">
            <div className={`grid gap-10 lg:grid-cols-2 lg:items-start`}>
              {/* Info */}
              <div>
                {product.suite && (
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                    {product.suite}
                  </p>
                )}
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{product.name}</h2>
                <p className="mt-1 text-lg font-medium text-muted-foreground">{product.tagline}</p>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {product.scenarios && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-foreground mb-2">Application Scenarios:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.scenarios.map((s) => (
                        <Badge key={s} variant="outline" className="text-xs">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex gap-3">
                  <Button
                    render={<Link href="/contact" />}
                    className="bg-brand hover:bg-brand-darkest text-white border-0"
                  >
                    Get a Quote <ArrowRight className="ml-1.5 size-4" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="rounded-2xl border border-border bg-bg-secondary p-6 shadow-sm dark:bg-bg-surface">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feat) => (
                    <li key={feat.label} className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <div>
                        <span className="text-sm font-medium text-foreground">{feat.label}</span>
                        <span className="text-sm text-muted-foreground"> — {feat.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {i < products.length - 1 && <Separator className="mt-20" />}
          </section>
        ))}
      </div>

      {/* Pricing section */}
      <section id="pricing" className="border-t border-border bg-bg-secondary py-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pricing"
            title="Transparent, Module-Based Pricing"
            description="One-time cost per active headcount per module. No hidden fees — scale as you grow."
            centered
          />

          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-bg-primary shadow-sm dark:bg-bg-surface">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-bg-surface dark:bg-bg-secondary">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Module</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Price</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground hidden sm:table-cell">
                    Model
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground hidden md:table-cell">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {pricingModules.map((module) => (
                  <tr key={module.name} className="hover:bg-bg-surface transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{module.name}</td>
                    <td className="px-6 py-4 text-accent font-semibold">{module.price}</td>
                    <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">
                      {module.model}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">
                      {module.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Pricing is module-based — one-time cost per active headcount per module.{" "}
            <Link href="/contact" className="text-accent underline underline-offset-4 hover:text-brand">
              Contact sales for a formal quotation.
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
