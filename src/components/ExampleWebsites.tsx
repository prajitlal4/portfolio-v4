'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const callouts = [
  {
    name: "E-Commerce",
    description:
      "A custom e-commerce platform designed to boost your sales and build lasting customer relationships. Built for performance, security, and easy management. If you want to see how this could work for your business, just ask!",
    imageSrc: "/ecommerce-example.PNG",
    imageAlt:
      "A custom e-commerce platform designed to boost your sales and build lasting customer relationships.",
    href: "#",
  },
  {
    name: "Marketing",
    description:
      "A marketing website that showcases your business and helps you reach more clients. Optimised for SEO and conversions, so you stand out from your competitors.",
    imageSrc: "/marketing-example.PNG",
    imageAlt:
      "A marketing website that showcases your business and helps you reach more clients.",
    href: "#",
  },
  {
    name: "Web-Application",
    description:
      "A powerful web application tailored to your business needs. Automate tasks, manage data, and scale with confidence. Want to see a live demo? Let me know!",
    imageSrc: "/application-example.PNG",
    imageAlt: "A powerful web application tailored to your business needs.",
    href: "#",
  },
];

function ExampleWebsites() {
  return (
    <div id="examples" className="bg-light-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold text-dark">
            Demo Websites
          </h2>
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout, idx) => (
              <motion.div
                key={callout.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group relative"
              >
                <div className="transition-[transform,opacity] ease-in-out delay-50 duration-300 group-hover:-translate-y-6 relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                    height={400}
                    width={400}
                  />
                </div>
                <h3 className="mt-6 text-sm text-dark-100">
                  <span className="absolute inset-0" />
                  {callout.name}
                </h3>
                <p className="mt-2 text-base font-semibold text-dark">
                  {callout.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleWebsites;
