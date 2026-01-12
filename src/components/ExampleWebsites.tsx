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
      "A website that shows off your work and brings in more clients. Gets found on Google and converts visitors into customers.",
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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-dark leading-tight max-w-3xl">
            Example Websites
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-dark-200 max-w-2xl leading-relaxed">
            Here's what we build for tradie businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {callouts.map((callout, idx) => (
            <div
              key={callout.name}
              className="relative flex flex-col h-full bg-light border border-dark/10 rounded-lg overflow-hidden hover:border-accent hover:bg-light-100 transition-colors duration-200"
            >
              <div className="relative h-64 overflow-hidden bg-light-100">
                <Image
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                  height={400}
                  width={400}
                />
              </div>

              <div className="flex-1 flex flex-col justify-between p-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-dark mb-3">
                    {callout.name}
                  </h3>
                  <p className="text-sm sm:text-base text-dark-200 leading-relaxed">
                    {callout.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExampleWebsites;
