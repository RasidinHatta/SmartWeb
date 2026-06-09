import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6"
import { contactInfo, navLinks } from "@/lib/data"

const solutionLinks = [
  { label: "SmartPAL Suite", href: "/products#smartpal" },
  { label: "SmartGoGo Mobile App", href: "/products#smartgogo" },
  { label: "Canteen System", href: "/products#canteen" },
  { label: "Dormitory System", href: "/products#dormitory" },
  { label: "Visitor Management", href: "/products#vms" },
  { label: "Biometric Solutions", href: "/products#biometric" },
]

const resourceLinks = [
  { label: "Payroll System Malaysia", href: "/products#smartpay" },
  { label: "Time Attendance Solution", href: "/products#smartime" },
  { label: "Leave Management System", href: "/products#smartleave" },
  { label: "Industry Solutions", href: "/services" },
  { label: "Project References", href: "/about" },
  { label: "Contact Us", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary dark:bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo.png`}
                alt="Smart Touch Technology"
                width={150}
                height={52}
                className="h-10 w-auto dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Malaysia&apos;s complete workforce automation platform — trusted by 2,500+ factories, offices,
              and condominiums since 2004.
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              {[
                { href: "https://www.facebook.com/payeeparadise/", label: "Facebook", Icon: FaFacebook },
                { href: "https://www.linkedin.com/in/payee-paradise-9aaa7a129/", label: "LinkedIn", Icon: FaLinkedin },
                { href: "https://www.youtube.com/channel/UCWAvmLE9HyDnoKdewb9gxgw", label: "YouTube", Icon: FaYoutube },
              ].map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-lg border border-border bg-bg-primary text-muted-foreground transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent dark:bg-bg-surface"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {contactInfo.address}
                </span>
              </li>
              {contactInfo.phones.slice(0, 2).map((phone) => (
                <li key={phone} className="flex items-center gap-2.5">
                  <Phone className="size-4 shrink-0 text-accent" />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Smart Touch Technology Sdn Bhd (638440-D). All rights reserved.
          </p>
          <nav className="flex gap-4" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors duration-200 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
