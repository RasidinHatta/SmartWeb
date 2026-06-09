"use client"

import { useState, type FormEvent } from "react"
import { Send, Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  headcount: string
  message: string
}

const initial: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  headcount: "",
  message: "",
}

type Status = "idle" | "loading" | "success" | "error"

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Partial<FormState>>({})

  function validate(): boolean {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = "Name is required."
    if (!form.company.trim()) next.company = "Company name is required."
    if (!form.email.trim()) {
      next.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address."
    }
    if (!form.message.trim()) next.message = "Please tell us about your requirements."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setStatus("loading")

    // Simulate submission (replace with real API endpoint)
    await new Promise((r) => setTimeout(r, 1200))
    setStatus("success")
    setForm(initial)
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
        <div className="flex size-14 items-center justify-center rounded-full bg-brand-teal/10">
          <CheckCircle2 className="size-7 text-brand-teal" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Message Sent!</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-xs">
          Thank you for reaching out. Our team will contact you within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + Company */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Ahmad Rahman"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="company">
            Company Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="ABC Manufacturing Sdn Bhd"
            value={form.company}
            onChange={handleChange}
            aria-invalid={!!errors.company}
            className={errors.company ? "border-destructive" : ""}
          />
          {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">
            Work Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="hr@company.com.my"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+6012-345 6789"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Headcount */}
      <div className="space-y-1.5">
        <Label htmlFor="headcount">Number of Employees</Label>
        <select
          id="headcount"
          name="headcount"
          value={form.headcount}
          onChange={handleChange}
          className="flex h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="">Select headcount range</option>
          <option value="1-50">1 – 50 employees</option>
          <option value="51-200">51 – 200 employees</option>
          <option value="201-500">201 – 500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message">
          Message / Requirements <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Please describe your payroll, attendance, or HR automation needs..."
          value={form.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          className={errors.message ? "border-destructive" : ""}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-gold hover:bg-brand-gold-light text-white border-0 h-10"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="mr-2 size-4" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Or call us directly:{" "}
        <a href="tel:+60733889903" className="text-brand-teal hover:underline">
          +607-388 9903
        </a>
      </p>
    </form>
  )
}
