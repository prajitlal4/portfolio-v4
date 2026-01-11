export const projects = [
  {
    title: "Jestin Auto Electrics",
    category: "Custom Website Launch",
    description:
      "Delivered a high-performance, SEO-optimised website that helped this business attract more clients and stand out in their industry. I provide direct communication and ongoing support for every client.",
    image: "/JestinAutoElectrics.jpg",
    href: "https://jestinautoelectrics.com",
    trade: "Electrician",
    suburb: "Perth",
  },
  {
    title: "Perth Liquid Limestone",
    category: "Website Revamp & SEO Boost",
    description:
      "Upgraded an existing website for better usability, faster load times, and higher Google rankings. My hands-on approach means clients always have direct access to me for updates and support.",
    image: "/PerthLiquidLimestone.jpg",
    href: "https://perthliquidlimestone.com.au",
    trade: "Speciality Services",
    suburb: "Perth",
  },
  {
    title: "Highside Plumbing and Gas",
    category: "Professional Plumbing Website",
    description:
      "Created a modern, professional website for a trusted plumbing and gas service provider. Designed to showcase their expertise and make it easy for customers to get in touch for reliable service.",
    image: "/highside-image.png",
    href: "https://highsideplumbing.com.au",
    trade: "Plumber",
    suburb: "Perth",
  },
  {
    title: "Scope Bathroom Renovations",
    category: "Bathroom Renovation Showcase",
    description:
      "Built a stunning showcase website for a premium bathroom renovation company. Features their beautiful work with an elegant design that converts visitors into customers.",
    image: "/scopebathrooms-image.webp",
    href: "https://scopebathroomrenovations.com",
    trade: "Renovator",
    suburb: "Perth",
  },
];

export type Project = (typeof projects)[number];
