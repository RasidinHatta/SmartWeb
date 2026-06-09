import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { ContactForm } from "@/components/contact/ContactForm"
import { contactInfo } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Smart Touch Technology. Book a demo, request a quote, or speak to our HR automation specialists in Johor Bahru, Malaysia.",
}

const officeDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value: contactInfo.address,
    link: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contactInfo.phones[0],
    link: `tel:${contactInfo.phones[0].replace(/\s/g, "")}`,
  },
  {
    icon: Phone,
    label: "Mobile",
    value: contactInfo.phones[1],
    link: `tel:${contactInfo.phones[1].replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    link: `mailto:${contactInfo.email}`,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Friday, 9:00 AM – 6:00 PM MYT",
    link: undefined,
  },
  {
    icon: MessageCircle,
    label: "Direct Contact",
    value: contactInfo.contactPerson,
    link: undefined,
  },
]

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Book a Demo or Request a Quote"
            description="Our HR automation specialists are ready to help you find the right solution for your workforce. Expect a response within one business day."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {["Free Demo", "No Commitment", "LHDN-Compliant", "24×7 Support"].map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: contact form */}
            <div>
              <h2 className="mb-6 text-xl font-semibold text-foreground">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Right: contact details */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground">Contact Information</h2>

              <ul className="space-y-4">
                {officeDetails.map(({ icon: Icon, label, value, link }) => (
                  <li key={label} className="flex gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-light dark:bg-accent-light/20">
                      <Icon className="size-4.5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {label}
                      </p>
                      {link ? (
                        <a
                          href={link}
                          className="text-sm text-foreground transition-colors duration-200 hover:text-accent"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <div className="rounded-2xl border border-accent/20 bg-bg-surface p-6">
                <p className="mb-1 text-sm font-semibold text-foreground">Prefer WhatsApp?</p>
                <p className="mb-4 text-sm text-muted-foreground">
                  Chat directly with our team on WhatsApp for quick enquiries.
                </p>
                <a
                  href="https://wa.me/60115354903"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp Us
                </a>
              </div>

              {/* All phones */}
              <div className="rounded-2xl border border-border bg-bg-secondary p-6">
                <p className="mb-3 text-sm font-semibold text-foreground">All Contact Numbers</p>
                <ul className="space-y-2">
                  {contactInfo.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                  <li className="text-sm text-muted-foreground">Fax: {contactInfo.fax}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border">
        <div className="overflow-hidden rounded-none">
          <iframe
            title="Smart Touch Technology Office Location"
            src="https://maps.google.com/maps?q=36-02+Jalan+Permas+10+Bandar+Baru+Permas+Jaya+81750+Masai+Johor+Malaysia&output=embed&z=16"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full grayscale-[20%]"
          />
        </div>
      </section>
    </div>
  )
}
