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
    label: "Websites for Tradies",
    href: "/websites-for-tradies",
  },
  {
    label: "Our Work",
    href: "/case-studies",
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
        label: "Websites for Tradies",
        href: "/websites-for-tradies",
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
        label: "About",
        href: "/about",
      },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      {
        label: "Case Studies",
        href: "/case-studies",
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
