export const projects = [
  {
    title: "Jestin Auto Electrics",
    category: "Custom Website Launch",
    description:
      "Built a fast website that gets found on Google and brings in more clients. They get direct access to me for updates and support.",
    image: "/JestinAutoElectrics.jpg",
    href: "https://jestinautoelectrics.com",
    trade: "Electrician",
    suburb: "Perth",
  },
  {
    title: "Perth Liquid Limestone",
    category: "Website Revamp & SEO Boost",
    description:
      "Upgraded their site to load faster and rank higher on Google. They get direct access to me whenever they need changes or support.",
    image: "/PerthLiquidLimestone.jpg",
    href: "https://perthliquidlimestone.com.au",
    trade: "Speciality Services",
    suburb: "Perth",
  },
  {
    title: "Highside Plumbing and Gas",
    category: "Professional Plumbing Website",
    description:
      "Built a website where customers can easily book plumbing and gas services. Shows their expertise and makes it simple to get in touch.",
    image: "/highside-image.png",
    href: "https://highsideplumbing.com.au",
    trade: "Plumber",
    suburb: "Perth",
  },
  {
    title: "Scope Bathroom Renovations",
    category: "Bathroom Renovation Showcase",
    description:
      "Built a website that shows off their bathroom work beautifully. Brings visitors in and turns them into customers.",
    image: "/scopebathrooms-image.webp",
    href: "https://scopebathroomrenovations.com",
    trade: "Renovator",
    suburb: "Perth",
  },
];

export type Project = (typeof projects)[number];
