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
    <div id="examples" className="relative bg-light-100 py-24 sm:py-32 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-32 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 sm:mb-20">
          <span className="inline-block text-sm font-semibold text-accent-dark uppercase tracking-wide mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark leading-tight max-w-3xl">
            Demo Websites <span className="bg-gradient-to-r from-accent via-sage to-charcoal bg-clip-text text-transparent">in Action</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-dark-200 max-w-2xl leading-relaxed">
            Explore different website types and see how they're built to convert visitors into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {callouts.map((callout, idx) => (
            <motion.div
              key={callout.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative flex flex-col h-full bg-light border border-dark/10 rounded-3xl overflow-hidden hover:border-accent/30 hover:shadow-glow transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden bg-light-100">
                <Image
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  height={400}
                  width={400}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
              </div>

              <div className="flex-1 flex flex-col justify-between p-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-dark mb-3 group-hover:text-accent transition-colors">
                    {callout.name}
                  </h3>
                  <p className="text-base text-dark-200 leading-relaxed">
                    {callout.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-accent-dark font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>View Details</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExampleWebsites;
