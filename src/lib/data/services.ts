import {
  CodeBracketSquareIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  SparklesIcon,
  CheckCircleIcon,
  PhoneIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export const coreServices = [
  {
    title: "Website Design & Build",
    subtitle:
      "A professional website that showcases your work and makes it easy for customers to find you and book jobs.",
    icon: CodeBracketSquareIcon,
  },
  {
    title: "Google Maps Setup",
    subtitle:
      "Get your business on Google Maps so locals can find you when they search for your trade in their area.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Local SEO",
    subtitle:
      "Show up in Google search results for the areas you service. Simple as that.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    title: "Website Maintenance",
    subtitle:
      "Keep your site secure, fast, and up to date. No surprises, no downtime.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Direct Support",
    subtitle:
      "You get my number. Direct access when you need changes, advice, or just have a question.",
    icon: UserGroupIcon,
  },
];

export type CoreService = (typeof coreServices)[number];

// Trade-specific service pages configuration
export const tradeServices = {
  plumbers: {
    name: "Plumbers",
    url: "/services/websites-for-plumbers",
    description: "Professional websites for plumbing businesses",
    status: "available",
    customerNeeds: [
      {
        title: "Can I call right now?",
        description: "Emergency response visibility and instant call options",
        icon: PhoneIcon,
      },
      {
        title: "How fast can you get here?",
        description: "Service area maps and response time guarantees",
        icon: SparklesIcon,
      },
      {
        title: "Have you done this before?",
        description: "Before/after galleries and case studies",
        icon: CheckCircleIcon,
      },
      {
        title: "Are you licensed & insured?",
        description: "Credentials and certifications prominently displayed",
        icon: StarIcon,
      },
      {
        title: "What will this cost?",
        description: "Transparent pricing and service area coverage",
        icon: MagnifyingGlassCircleIcon,
      },
      {
        title: "Can I read what others say?",
        description: "Reviews, testimonials, and social proof",
        icon: UserGroupIcon,
      },
    ],
    features: [
      "Emergency callout highlights",
      "Before/after galleries",
      "Service area maps",
      "24/7 availability indicator",
      "Google reviews integration",
      "License & insurance display",
      "Booking/quote request forms",
      "Works perfectly on mobile",
    ],
  },
  electricians: {
    name: "Electricians",
    url: "/services/websites-for-electricians",
    description: "Professional websites for electrical businesses",
    status: "available",
    customerNeeds: [
      {
        title: "Can you handle my emergency?",
        description: "24/7 emergency response and availability",
        icon: PhoneIcon,
      },
      {
        title: "Are you licensed & certified?",
        description: "Qualifications and safety certifications",
        icon: CheckCircleIcon,
      },
      {
        title: "What kind of work?",
        description: "Service categories and expertise areas",
        icon: SparklesIcon,
      },
      {
        title: "How much experience?",
        description: "Portfolio of completed projects",
        icon: StarIcon,
      },
      {
        title: "Do you cover my area?",
        description: "Service area maps and location coverage",
        icon: MagnifyingGlassCircleIcon,
      },
      {
        title: "How reliable are you?",
        description: "Testimonials, reviews, and guarantees",
        icon: UserGroupIcon,
      },
    ],
    features: [
      "24/7 emergency availability",
      "Safety certifications display",
      "Service type categorization",
      "Project portfolio pages",
      "Service area maps",
      "Google reviews integration",
      "Instant quote requests",
      "Emergency call button",
    ],
  },
  landscapers: {
    name: "Landscapers",
    url: "/services/websites-for-landscapers",
    description: "Professional websites for landscaping businesses",
    status: "available",
    customerNeeds: [
      {
        title: "Can you do my type of project?",
        description: "Project type showcases and examples",
        icon: SparklesIcon,
      },
      {
        title: "What have you built before?",
        description: "Before/after galleries and project showcases",
        icon: CheckCircleIcon,
      },
      {
        title: "Do you handle seasonal services?",
        description: "Seasonal service highlights and timelines",
        icon: StarIcon,
      },
      {
        title: "How long does it take?",
        description: "Project timelines and planning guides",
        icon: PhoneIcon,
      },
      {
        title: "Do you cover my area?",
        description: "Service area maps and suburb coverage",
        icon: MagnifyingGlassCircleIcon,
      },
      {
        title: "What's the cost?",
        description: "Pricing frameworks and package options",
        icon: UserGroupIcon,
      },
    ],
    features: [
      "Large image galleries",
      "Before/after sliders",
      "Project type filters",
      "Seasonal service showcase",
      "Timeline & planning pages",
      "Service area maps",
      "Quote request forms",
      "Mobile-friendly portfolio",
    ],
  },
  renovators: {
    name: "Renovators",
    url: "/services/websites-for-renovators",
    description: "Professional websites for renovation businesses",
    status: "available",
    customerNeeds: [
      {
        title: "Have you done similar projects?",
        description: "Project showcases and case studies",
        icon: SparklesIcon,
      },
      {
        title: "Can I see before/after photos?",
        description: "Comprehensive before/after galleries",
        icon: CheckCircleIcon,
      },
      {
        title: "How long will it take?",
        description: "Project timelines and planning",
        icon: StarIcon,
      },
      {
        title: "What do others say about you?",
        description: "Client testimonials and reviews",
        icon: UserGroupIcon,
      },
      {
        title: "What will this cost?",
        description: "Transparent pricing and estimates",
        icon: PhoneIcon,
      },
      {
        title: "Do you cover my area?",
        description: "Service areas and location coverage",
        icon: MagnifyingGlassCircleIcon,
      },
    ],
    features: [
      "Before/after galleries",
      "Project showcases",
      "Testimonial highlights",
      "Timeline projections",
      "Photo portfolios",
      "Service area coverage",
      "Quote/consultation forms",
      "Renovation type filters",
    ],
  },
  builders: {
    name: "Builders",
    url: "/services/websites-for-builders",
    description: "Professional websites for building businesses",
    status: "available",
    customerNeeds: [
      {
        title: "Have you built similar projects?",
        description: "Project portfolio and case studies",
        icon: SparklesIcon,
      },
      {
        title: "What's your experience?",
        description: "Credentials and past projects",
        icon: CheckCircleIcon,
      },
      {
        title: "What areas do you cover?",
        description: "Service areas and project locations",
        icon: MagnifyingGlassCircleIcon,
      },
      {
        title: "How long does construction take?",
        description: "Timeline and project planning info",
        icon: StarIcon,
      },
      {
        title: "Can you handle my budget?",
        description: "Project pricing and estimates",
        icon: PhoneIcon,
      },
      {
        title: "What do others say?",
        description: "Testimonials and social proof",
        icon: UserGroupIcon,
      },
    ],
    features: [
      "Project portfolio",
      "Before/after galleries",
      "Build type categorization",
      "Timeline information",
      "Pricing guides",
      "Service area maps",
      "Quote request forms",
      "Testimonials section",
    ],
  },
};

export type TradeService = (typeof tradeServices)[keyof typeof tradeServices];
