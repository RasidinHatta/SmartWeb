import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Smart Touch Technology — Malaysia's Complete Workforce Automation",
    template: "%s | Smart Touch Technology",
  },
  description:
    "Integrated Payroll, HRMS & Time Attendance Software trusted by 2,500+ factories, offices, and condominiums across Malaysia. LHDN-compliant with facial recognition, biometric attendance, and mobile HR.",
  keywords: [
    "payroll system malaysia",
    "HRMS malaysia",
    "time attendance system",
    "biometric attendance",
    "leave management system",
    "smartpal",
    "smartouch",
    "HR software johor",
    "LHDN compliant payroll",
    "EPF SOCSO payroll",
  ],
  authors: [{ name: "Smart Touch Technology Sdn Bhd" }],
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Smart Touch Technology",
    title: "Smart Touch Technology — Malaysia's Complete Workforce Automation",
    description:
      "Integrated Payroll, HRMS & Time Attendance Software trusted by 2,500+ businesses across Malaysia.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip-to-content for keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg focus:outline-none"
          >
            Skip to main content
          </a>

          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
