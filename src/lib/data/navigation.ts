export const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      {
        label: "Websites for Plumbers",
        href: "/services/websites-for-plumbers",
      },
      {
        label: "Websites for Electricians",
        href: "/services/websites-for-electricians",
      },
      {
        label: "Websites for Landscapers",
        href: "/services/websites-for-landscapers",
      },
      {
        label: "Websites for Renovators",
        href: "/services/websites-for-renovators",
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Our Work",
    href: "/case-studies",
  },
  {
    label: "Resources",
    href: "/guides",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerColumns = {
  services: {
    title: "Services",
    links: [
      {
        label: "Websites for Plumbers",
        href: "/services/websites-for-plumbers",
      },
      {
        label: "Websites for Electricians",
        href: "/services/websites-for-electricians",
      },
      {
        label: "Websites for Landscapers",
        href: "/services/websites-for-landscapers",
      },
      {
        label: "Websites for Renovators",
        href: "/services/websites-for-renovators",
      },
    ],
  },
  company: {
    title: "Company",
    links: [
      {
        label: "Our Work",
        href: "/case-studies",
      },
      {
        label: "Pricing",
        href: "/pricing",
      },
      {
        label: "About",
        href: "/about",
      },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      {
        label: "All Guides",
        href: "/guides",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
      },
      {
        label: "Blog",
        href: "/guides",
      },
    ],
  },
  contact: {
    title: "Contact",
    links: [
      {
        label: "Get in Touch",
        href: "/contact",
      },
    ],
  },
};

export type NavigationLink = (typeof navigationLinks)[number];
