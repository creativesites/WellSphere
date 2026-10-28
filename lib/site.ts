// Single source of truth for company facts. Every page and the structured data read from here.
// Facts come from the Wellsphere company profile and brochure. Items marked TODO need client confirmation.

export const site = {
  name: 'Wellsphere General Dealers',
  shortName: 'WellSphere',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.wellsphere.example',
  tagline: 'Reliable Solutions. Quality Service. Lasting Partnerships.',
  description:
    'WellSphere General Dealers is a multi-disciplinary Zambian enterprise providing PACRA and ZRA compliance, ZEMA environmental services, software, automation, building materials, office supplies and procurement to corporate, government and healthcare clients in Lusaka.',
  registrationNumber: '320251051968',
  location: 'Lusaka, Zambia',
  email: 'wellsphre@gmail.com', // TODO: move to a company-owned domain before launch
  phones: [
    { label: 'Call and WhatsApp', display: '0972 559 668', tel: '+260972559668', whatsapp: true },
    { label: 'Mobile', display: '0979 046 745', tel: '+260979046745', whatsapp: false },
    { label: 'Mobile', display: '0761 959 012', tel: '+260761959012', whatsapp: false },
  ],
  whatsappUrl: 'https://wa.me/260972559668',
  hours: 'Mon to Fri, 8:00 to 17:00', // TODO: confirm with client
  profilePdf: '/downloads/Wellsphere-Company-Profile.pdf',
} as const;

export type Service = {
  id: string;
  number: string;
  title: string;
  summary: string;
  items: { label: string; detail: string }[];
};

export const services: Service[] = [
  {
    id: 'compliance',
    number: '01',
    title: 'Corporate Statutory, PACRA and Business Compliance',
    summary: 'Registrations, annual filings, ZRA TPIN, Tax Clearance, NAPSA, WCFCB and council permits, handled accurately and on time.',
    items: [
      { label: 'PACRA registrations', detail: 'Business names, sole proprietorships, partnerships, Ltd / PLC incorporation, name search and reservation.' },
      { label: 'Statutory filings', detail: 'Annual returns, director and shareholder updates, share capital restructuring, Articles of Association and company extracts.' },
      { label: 'Tax and institutional registrations', detail: 'ZRA TPIN, Tax Clearance Certificates, NAPSA, WCFCB and local council business permits.' },
    ],
  },
  {
    id: 'environmental',
    number: '02',
    title: 'Environmental and ZEMA Regulatory Services',
    summary: 'Project briefs, impact assessments, compliance audits, waste management and ZEMA licensing.',
    items: [
      { label: 'Environmental Project Briefs (EPB)', detail: 'Preparation and submission for small-to-medium developments.' },
      { label: 'Environmental Impact Assessments (EIA)', detail: 'Industrial, commercial, agricultural and construction ventures.' },
      { label: 'Audits and inspections', detail: 'Compliance monitoring, risk assessments and gap audits.' },
      { label: 'Waste and pollution control', detail: 'Waste plans, hazardous materials guidance and disposal compliance.' },
      { label: 'ZEMA licensing', detail: 'Approvals, permits and compliance certificates.' },
    ],
  },
  {
    id: 'software',
    number: '03',
    title: 'Software Engineering and Core Development',
    summary: 'Custom web, mobile and desktop software, responsive websites and secure database design.',
    items: [
      { label: 'Custom software', detail: 'Tailored web applications, cross-platform mobile apps for iOS and Android, and desktop software.' },
      { label: 'Website design and development', detail: 'Responsive, fast-loading, SEO-friendly corporate websites and client portals.' },
      { label: 'System integration', detail: 'Connecting accounting, POS, inventory and ERP software into one automated workflow.' },
      { label: 'Database architecture', detail: 'Secure, scalable, ACID-compliant design for data integrity and fast retrieval.' },
    ],
  },
  {
    id: 'automation',
    number: '04',
    title: 'Advanced Systems, Operations and AI Solutions',
    summary: 'Workflow automation, smart document scanning, WhatsApp bots and live management dashboards.',
    items: [
      { label: 'Business process automation', detail: 'Removing repetitive paperwork, data-entry errors and approval delays.' },
      { label: 'Practice and operations management', detail: 'Patient records, appointments and automated billing for clinics and surgeries.' },
      { label: 'AI-powered solutions', detail: 'Smart OCR document parsing, 24/7 WhatsApp customer-service bots and predictive analytics.' },
      { label: 'Dashboards and analytics', detail: 'Real-time executive dashboards, revenue trackers and cross-system analytics.' },
      { label: 'Maintenance and support retainers', detail: 'Monthly upkeep, uptime monitoring, cloud backups and database security patching.' },
    ],
  },
  {
    id: 'building',
    number: '05',
    title: 'Building Materials, Hardware and Construction',
    summary: 'Cement, building sand, hand tools, plumbing, safety wear and renovation supplies.',
    items: [
      { label: 'Building materials', detail: 'Cement (50 kg bags), building sand, aggregates and masonry supplies.' },
      { label: 'Hardware and tools', detail: 'Wheelbarrows, spades, hand tools, plumbing pipes, PVC fittings and power tools.' },
      { label: 'Safety and protective wear (PPE)', detail: 'Hard hats, high-vis vests, steel-toe boots, goggles and heavy-duty gloves.' },
      { label: 'Paints and renovation supplies', detail: 'Paints, primers, brushes, rollers, light bulbs, wiring and fixtures.' },
    ],
  },
  {
    id: 'office',
    number: '06',
    title: 'Office, School, Cleaning and General Merchandise',
    summary: 'Stationery, office furniture, IT equipment, cleaning supplies and pantry essentials.',
    items: [
      { label: 'Stationery and office supplies', detail: 'A4 and A3 paper, notebooks, box files, pens, desk organisers and custom registers.' },
      { label: 'Office furniture and IT equipment', detail: 'Desks, ergonomic chairs, laptops, monitors, surge extensions and storage devices.' },
      { label: 'Cleaning and sanitation', detail: 'Industrial cleaning chemicals, detergents, medical-grade hand sanitisers and mop buckets.' },
      { label: 'Staff pantry essentials', detail: 'Tea, coffee, sugar, creamers, bottled spring water and refreshments.' },
    ],
  },
  {
    id: 'procurement',
    number: '07',
    title: 'Procurement, Logistics and Advisory Services',
    summary: 'Sourcing and tenders, volume pricing, reliable delivery and installation support.',
    items: [
      { label: 'Procurement and sourcing', detail: 'Specialised product sourcing, tender fulfilment and supply-chain procurement to client specifications.' },
      { label: 'Wholesale and retail', detail: 'Competitive volume pricing on bulk institutional purchases and individual orders.' },
      { label: 'Delivery and support', detail: 'Reliable transport to your clinic, site, office or residence, with installation support.' },
    ],
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    slug: 'precious-mucheta',
    name: 'Dr Precious Mucheta',
    role: 'Director',
    credentials: "Bachelor's in Oral Surgery · HPCZ licensed · CBU graduate",
    bio: "Leads corporate strategy and oversees cybersecurity, visual branding and content design. Brings clinical insight to the company's health-related work.",
    photo: '/images/team/precious-mucheta.jpg',
  },
  {
    slug: 'davies-mpundu',
    name: 'Davies Mpundu',
    role: 'Environmental Engineer',
    credentials: "Bachelor's in Environmental Engineering · EIZ registered · CBU graduate",
    bio: 'Leads environmental compliance work, preparing Environmental Impact Assessments and project briefs, and managing ZEMA engagements.',
    photo: '/images/team/davies-mpundu.jpg',
  },
  {
    slug: 'winston-zulu',
    name: 'Winston Zulu',
    role: 'Software Engineer',
    credentials: 'Software developer and product builder',
    bio: 'Turns real business and operational challenges into practical digital solutions across web, mobile, AI and business systems.',
    photo: '/images/team/winston-zulu.jpg',
  },
  {
    slug: 'martin-chilungu',
    name: 'Martin Chilungu',
    role: 'Registered Nurse',
    credentials: 'Diploma in Registered Nursing · NMCZ licensed',
    bio: 'Trained at Mansa College of Nursing, with experience in patient care, community health and team leadership.',
    photo: '/images/team/martin-chilungu.jpg',
  },
  {
    slug: 'innocent-mucheta',
    name: 'Innocent Mucheta',
    role: 'Accountant',
    credentials: "Bachelor's degree · ZICA member · CBU graduate",
    bio: "Manages the company's financial accounting and ZRA tax compliance, and prepares the business for audits.",
    photo: '/images/team/innocent-mucheta.jpg',
  },
  {
    slug: 'honest-mucheta',
    name: 'Honest Mucheta',
    role: 'Telecommunication Engineer',
    credentials: 'EIZ accredited · CBU graduate',
    bio: 'Oversees network architecture and telecommunications infrastructure, from the first cable to the final handover.',
    photo: '/images/team/honest-mucheta.jpg',
  },
  {
    slug: 'mable-mutale',
    name: 'Mable Mutale',
    role: 'Business Administrator',
    credentials: 'Corporate administration and client relations',
    bio: 'Coordinates procurement logistics and office operations, and makes sure every client request is followed through.',
    photo: '/images/team/mable-mutale.jpg',
  },
];

export const clientTypes = [
  'Private corporation',
  'Government institution',
  'Healthcare organisation',
  'Local community or individual',
] as const;
