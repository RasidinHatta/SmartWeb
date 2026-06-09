// ─── Navigation ─────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

// ─── Products ────────────────────────────────────────────────────────────────

export interface ProductFeature {
  label: string
  description: string
}

export interface Product {
  id: string
  name: string
  suite?: string
  tagline: string
  description: string
  href: string
  features: ProductFeature[]
  scenarios?: string[]
}

export const products: Product[] = [
  {
    id: "smartpay",
    name: "Smartpay",
    suite: "SmartPAL Suite",
    tagline: "Payroll System",
    description:
      "Automates payroll calculation and reduces risk of incorrect payments. Integrates payroll with attendance, leave and claim software. Approved by KWSP, LHDN, SOCSO and majority of Malaysian banks.",
    href: "/products#smartpay",
    features: [
      {
        label: "Payslip Retrieval",
        description: "View & print via portal or mobile app; email password-protected payslips",
      },
      {
        label: "Statutory Contributions",
        description: "KWSP, SOCSO, EIS auto-linked to online government portals",
      },
      {
        label: "Bank GIRO",
        description: "Online salary transfer to most Malaysian banks",
      },
      {
        label: "Income Tax",
        description: "Auto-generate PCB/EA Form/CP21/CP39 with online submission (Auto Inclusion)",
      },
      {
        label: "Custom Reports",
        description:
          "Export to Excel, PDF, Word — payroll summary, YTD, reconciliation, OT summary, headcount",
      },
      {
        label: "Employee Bio-Data",
        description: "Career history, training, appraisal, insurance with photo",
      },
      {
        label: "New Employee Setup",
        description:
          "Auto-transfers leave & claim data so employees are paid correctly from day one",
      },
    ],
  },
  {
    id: "smartime",
    name: "Smartime",
    suite: "SmartPAL Suite",
    tagline: "Time Attendance System",
    description:
      "Cloud-based or local installation. Captures attendance via mobile app (GPS + face recognition) and biometric machines. Real-time sync to HRMS. Supports multiple shift patterns with customisable rules.",
    href: "/products#smartime",
    features: [
      { label: "OT Rates", description: "Normal OT 1.0, 1.5, 2.0; Flat rate OT" },
      { label: "Early OT", description: "Overtime prior to scheduled shift time" },
      { label: "Off-set OT", description: "Overtime adjusted against lateness" },
      { label: "Rounding/Ceiling", description: "Rounding OT hours; minimum and maximum OT hour ceilings" },
      { label: "Post-Midnight", description: "Different OT rates after midnight; dinner break deductions" },
      { label: "Pre-Approve", description: "Pre-approve OT hours before actual work" },
      {
        label: "Allowances",
        description: "Attendance, transport, meal, shift, health; weekday/weekend/PH computations",
      },
      {
        label: "Shift Patterns",
        description: "Unlimited rotation duty rosters, flexible hours, auto-shift assignment",
      },
    ],
  },
  {
    id: "smartleave",
    name: "SmartLeave",
    suite: "SmartPAL Suite",
    tagline: "Leave Management System",
    description:
      "Automates leave balance calculation, application and approval. Supports up to three-level approval structure with backup approver. Approved leave auto-updates in Smartime and Smartpay.",
    href: "/products#smartleave",
    features: [
      { label: "Mobile Apply & Approval", description: "Leave apply and approval via mobile app" },
      { label: "Medical Leave Uploads", description: "Upload medical leave attachment documents" },
      { label: "Leave Balance View", description: "View all types of leave balances at a glance" },
      { label: "Daily Leave Alert", description: "See who is on leave today" },
      { label: "Leave Calendar", description: "Monthly view of all staff leave" },
      { label: "3-Level Approval", description: "Up to 3-level approval; backup approver available" },
      {
        label: "Department View",
        description: "While approving, see other staff on leave in same department",
      },
      { label: "Payroll Sync", description: "Accurate calculations synced to payroll automatically" },
    ],
  },
  {
    id: "smartclaim",
    name: "SmartClaim",
    suite: "SmartPAL Suite",
    tagline: "E-Claim System",
    description:
      "Paperless electronic claim application via browser or mobile app. Push notifications for every claim application and approval. Approved claims automatically update in Payroll System and appear on employee payslips.",
    href: "/products#smartclaim",
    features: [
      { label: "Online Submission", description: "Online submit & manage claims paperlessly" },
      { label: "Entitlement Levels", description: "Different user levels with different claim entitlements" },
      { label: "Claim Limits", description: "Define claim limit by claim type or user" },
      { label: "Batch Submission", description: "Submit multiple claims in one submission" },
      { label: "Real-Time Notifications", description: "Routed to superior for approval with real-time status" },
      {
        label: "Claim Reports",
        description: "Entitlement, Approved, Rejected, Cancellation, Pending reports",
      },
    ],
  },
  {
    id: "smartgogo",
    name: "SmartGoGo",
    tagline: "Mobile HR Application",
    description:
      "The ultimate mobile HR app for Malaysia, crafted to meet local compliance needs. Designed for Malaysian SMEs — covers payroll, attendance, leave and claims. Available on iOS and Android. Serverless and installation-free.",
    href: "/products#smartgogo",
    scenarios: ["Dormitory", "Construction", "School", "Healthcare", "Factory", "Shipyard", "Office"],
    features: [
      {
        label: "Payroll",
        description: "Real-time payroll updates; automated EPF, SOCSO, PCB; payslip access anytime",
      },
      {
        label: "Attendance",
        description: "GPS clock-in/out; fingerprint biometric; real-time monitoring; detailed analytics",
      },
      {
        label: "Leave",
        description: "Instant leave requests & approvals; leave balance check; Malaysian compliance",
      },
      {
        label: "Claims",
        description: "Quick claim submission with receipt upload; auto-routing for approval; real-time status",
      },
      {
        label: "e-Payslip",
        description: "View digital payslips from previous months; secure storage; easy sharing",
      },
      {
        label: "Shift Management",
        description: "Multiple shifts, fixed, rotation, auto-shift; yearly calendar; flexi hours",
      },
    ],
  },
  {
    id: "canteen",
    name: "Canteen Management System",
    tagline: "Smart Workplace Dining",
    description:
      "Tailored for busy workplace canteens, combining advanced technology with user-friendly features. Designed to reduce food waste, ensure smooth operations, and provide a seamless dining experience.",
    href: "/products#canteen",
    features: [
      {
        label: "Digital Meal Ordering",
        description: "Pre-order via web portal or mobile app; minimise food waste",
      },
      {
        label: "Biometric Integration",
        description: "Face recognition, fingerprint, or access cards for meal authentication",
      },
      {
        label: "Cashless Transactions",
        description: "e-Wallets, meal vouchers, or payroll deduction; no cash handling",
      },
      {
        label: "Meal Entitlement",
        description: "Define meal limits by shift, grade, or department; prevent misuse",
      },
      {
        label: "Vendor Management",
        description: "Manage multiple food vendors; track performance, quality, payments",
      },
      {
        label: "Real-Time Inventory",
        description: "Monitor ingredient stock; automated restocking integration with suppliers",
      },
      {
        label: "Multi-Language",
        description: "Interface in multiple languages for Malaysia's diverse workforce",
      },
      {
        label: "Cloud-Based",
        description: "Access anytime, anywhere; data security with regular backups & encryption",
      },
    ],
  },
  {
    id: "dormitory",
    name: "Dormitory & Hostel System",
    tagline: "Worker Accommodation Management",
    description:
      "A complete digital solution for hostels, worker accommodation, and property operators. Real-time dashboard with total residents, bed counts, nationality charts, and automatic alerts for expiring work permits.",
    href: "/products#dormitory",
    features: [
      { label: "Real-Time Dashboard", description: "Detailed View and Room View with real-time occupancy charts" },
      {
        label: "Residents Management",
        description: "Add, Edit, Terminate, Filter residents; full personal details, documents, stay history",
      },
      {
        label: "15+ Reports",
        description:
          "Master List, Nationality, Door List, Available Beds, Passport Expiry, Work Permit Expiry — all exportable to Excel",
      },
      {
        label: "Booking Management",
        description: "Reserve/unreserve beds in advance; graphical layout mirrors actual dormitory",
      },
      {
        label: "Fine Management",
        description: "Create fines for residents for unusual/illegal actions; notifies employer",
      },
      {
        label: "Billing Management",
        description: "View monthly billing per company; summary billing view; company agreements",
      },
      {
        label: "Security Integration",
        description: "Access control via access cards or biometric systems; integrates with facial recognition devices",
      },
      {
        label: "Admin Management",
        description: "Manage admin users & roles; bulk import residents; email alerts for WP/Passport expiry",
      },
    ],
  },
  {
    id: "vms",
    name: "Visitor Management System",
    tagline: "Secure Access Control",
    description:
      "Registers, verifies, and tracks visitor entry using facial recognition or QR codes — ensuring safe and secure access control in high-security areas or office lobbies. Available in mobile app and kiosk formats.",
    href: "/products#vms",
    features: [
      { label: "Self-Registration", description: "Visitor self-registration via web or kiosk" },
      { label: "QR Code Entry", description: "Fast QR code-based entry verification" },
      { label: "Kiosk & Mobile", description: "Available in both mobile app and kiosk formats" },
      { label: "Host Notification", description: "Instant host notification & access tracking" },
      { label: "Facial Recognition", description: "Biometric facial recognition verification" },
      {
        label: "HRMS Integration",
        description: "Integration with HRMS for employee vs. visitor differentiation",
      },
    ],
  },
]

// ─── Industry Verticals ──────────────────────────────────────────────────────

export interface Vertical {
  id: string
  name: string
  description: string
  icon: string
}

export const verticals: Vertical[] = [
  {
    id: "manufacturing",
    name: "Manufacturing & Factories",
    description:
      "High-volume workforce management with rotating shifts, biometric attendance, and strict production floor access control. Turnstile integration ensures only active, compliant staff can enter.",
    icon: "Factory",
  },
  {
    id: "construction",
    name: "Construction & Engineering",
    description:
      "Rugged biometric devices for on-site attendance tracking, project-based payroll, and contractor access monitoring. Combines BAS, VMS, job costing, safety compliance, and mobile clock-ins.",
    icon: "HardHat",
  },
  {
    id: "enterprise",
    name: "Large Enterprises",
    description:
      "Centralised management for multi-branch offices with unified payroll and security protocols. Multi-entity account support for complex organisational structures.",
    icon: "Building2",
  },
  {
    id: "dormitory",
    name: "Dormitories & Condominiums",
    description:
      "Worker registration & allocation, attendance & access monitoring, compliance-ready reporting. Includes billing management for bed operators.",
    icon: "Home",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "Staff attendance and access control adapted for hospital and clinic environments. Ensures secure zones and precise timekeeping for shift-based healthcare workers.",
    icon: "Stethoscope",
  },
  {
    id: "schools",
    name: "Schools",
    description:
      "Student and staff attendance management via SmartGoGo mobile application. Simplifies daily monitoring and leave tracking for educational institutions.",
    icon: "GraduationCap",
  },
  {
    id: "shipyard",
    name: "Shipyards",
    description:
      "Biometric access and attendance in maritime industrial environments. Handles complex multi-contractor workforces with project-based costing.",
    icon: "Anchor",
  },
]

// ─── Key Capabilities ────────────────────────────────────────────────────────

export interface Capability {
  title: string
  description: string
  icon: string
}

export const capabilities: Capability[] = [
  {
    title: "Hardware-Linked Attendance",
    description:
      "Pulls data directly from fingerprint, face ID, and turnstile devices in real-time. Eliminates buddy punching. Live tracking of who is on-site. Handles multiple shifts, overnight crossovers, and flexible rostering automatically.",
    icon: "Fingerprint",
  },
  {
    title: "LHDN-Compliant Payroll",
    description:
      "OT, lateness, and allowances calculated the moment an employee clocks out. Auto-generated forms for EPF (KWSP), SOCSO (PERKESO), EIS, and PCB (LHDN). Secure mobile e-payslip access.",
    icon: "Calculator",
  },
  {
    title: "Advanced Security",
    description:
      "Zone control restricts employee access to hazardous or sensitive areas. VMS tracks guests and contractors digitally. Turnstile integration ensures only active, compliant staff enter the floor.",
    icon: "ShieldCheck",
  },
  {
    title: "E-Leave & E-Claim",
    description:
      "App-based leave/claim application. One-click manager approval flows. Leave balances auto-update in payroll. Supports up to three-level approval with backup approver.",
    icon: "Smartphone",
  },
  {
    title: "Cloud Access Anywhere",
    description:
      "Cloud-based with quick remote access to critical employee information. Mobile-first architecture designed for Malaysian SMEs and enterprise.",
    icon: "Cloud",
  },
  {
    title: "Regular Compliance Updates",
    description:
      "Automatic statutory rate changes for EPF, SOCSO, EIS, and PCB. Always up to date with the latest Malaysian government regulations.",
    icon: "RefreshCw",
  },
]

// ─── Why Choose Us ───────────────────────────────────────────────────────────

export const whyChooseUs = [
  { title: "24×7 Work Culture", description: "Round-the-clock support and system availability" },
  { title: "Professional Team", description: "Over 20 years of HR automation expertise" },
  { title: "Personalised Approach", description: "Solutions tailored to your business needs" },
  { title: "Regular Updates", description: "Automatic statutory rate changes, always compliant" },
  { title: "High Quality Deliverables", description: "Precision-engineered software you can rely on" },
  { title: "Trusted by 2,500+", description: "Factories, offices, and condominiums across Malaysia" },
]

// ─── Pricing ─────────────────────────────────────────────────────────────────

export interface PricingModule {
  name: string
  price: string
  model: string
  notes: string
}

export const pricingModules: PricingModule[] = [
  {
    name: "Smartpay (Payroll)",
    price: "RM 36",
    model: "per active headcount (one-time)",
    notes: "Includes payslip, statutory compliance, bank GIRO",
  },
  {
    name: "Smartime (Attendance)",
    price: "RM 36",
    model: "per active headcount (one-time)",
    notes: "Bonus: 1 free biometric device per 100 headcounts",
  },
  {
    name: "SmartLeave",
    price: "RM 36",
    model: "per active headcount (one-time)",
    notes: "3-level approval, mobile leave app",
  },
  {
    name: "SmartClaim",
    price: "RM 36",
    model: "per active headcount (one-time)",
    notes: "3-level approval, mobile claims app",
  },
  {
    name: "Yearly Maintenance",
    price: "Competitive",
    model: "annual",
    notes: "Details available from sales team",
  },
  {
    name: "Canteen / Dormitory / VMS",
    price: "Contact",
    model: "custom quote",
    notes: "Custom pricing based on scope",
  },
]

// ─── FAQs ────────────────────────────────────────────────────────────────────

export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: "Is Smartouch Payroll compliant with the latest 2025/2026 EPF rates?",
    answer:
      "Yes — the system updates automatically whenever the government announces new statutory rates. You will always be compliant without any manual intervention.",
  },
  {
    question: "Can I import data from Excel?",
    answer:
      "Yes — bulk import of employee data is supported to help you get started quickly. This allows fast onboarding without re-keying existing data.",
  },
  {
    question: "Does it support different OT rates?",
    answer:
      "Yes — supports custom OT formulas including OT 1.0, 1.5, 2.0, and Rest Day calculations. You can also configure flat-rate OT, post-midnight rates, and pre-approved OT hours.",
  },
  {
    question: "Is the system cloud-based or installed on-premises?",
    answer:
      "Both options are available. SmartPAL can be deployed as a cloud solution for remote access or installed locally on your own infrastructure. SmartGoGo is serverless and installation-free on mobile.",
  },
  {
    question: "Which banks are supported for GIRO salary transfer?",
    answer:
      "SmartPAL supports online salary transfer to the majority of Malaysian banks. The system is also approved by KWSP, LHDN, and SOCSO for statutory submissions.",
  },
  {
    question: "How does the biometric attendance work?",
    answer:
      "Attendance can be captured via fingerprint readers, facial recognition devices, or through the SmartGoGo mobile app using GPS + face recognition. All data syncs in real-time to the HRMS.",
  },
]

// ─── Clients ─────────────────────────────────────────────────────────────────

export const clients = [
  "Westlite",
  "Gardenia",
  "Coca-Cola",
  "Samsung",
  "Super",
  "Volvo",
  "Levi's",
  "ZF",
  "Daily Fresh",
  "JCY",
  "Zenxin",
  "Powerroot",
  "Sime Darby Oil",
  "MMHE",
  "Willmar",
]

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats = [
  { value: "2,500+", label: "Clients Nationwide" },
  { value: "20+", label: "Years Experience" },
  { value: "2004", label: "Founded" },
  { value: "LHDN", label: "Compliant" },
]

// ─── Contact ─────────────────────────────────────────────────────────────────

export const contactInfo = {
  address: "36-02 & 36-03, Jalan Permas 10, Bandar Baru Permas Jaya, 81750 Masai, Johor, Malaysia",
  phones: ["+607-388 9903", "+6011-5354 9903", "+607-388 3686"],
  fax: "+607-388 0628",
  email: "sales@smartouch.com.my",
  website: "www.smartouch.com.my",
  contactPerson: "Mr Kenny — 012-788 3383",
}

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/payeeparadise/",
    icon: "Facebook",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/payee-paradise-9aaa7a129/",
    icon: "Linkedin",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCWAvmLE9HyDnoKdewb9gxgw",
    icon: "Youtube",
  },
]

// ─── Core Framework Pillars ──────────────────────────────────────────────────

export const pillars = [
  {
    name: "PAL",
    label: "Heart",
    title: "Payroll, Attendance & Leave",
    description:
      "The operational core of SmartPAL — automates the full employee lifecycle from clock-in to payslip, with real-time sync across all modules.",
    icon: "Heart",
  },
  {
    name: "BAS",
    label: "Brain",
    title: "Biometric Authentication System",
    description:
      "Facial recognition and real-time monitoring established in 2009 — hardware-linked attendance that eliminates buddy punching and manual entry.",
    icon: "Brain",
  },
  {
    name: "SmartGoGo",
    label: "Mobile Arm",
    title: "Mobile-First HR Platform",
    description:
      "Launched 2020 — GPS clock-in, e-leave, claims, and payslips in one mobile app. Serverless and installation-free for field and mobile teams.",
    icon: "Smartphone",
  },
]
