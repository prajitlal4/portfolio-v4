'use client';

import {
  CursorArrowRaysIcon,
  GlobeAltIcon,
  CircleStackIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

const features = [
  {
    name: "Website Development",
    description:
      "Your website is often the first impression your business makes. I build custom websites that look great and are designed to convert visitors into loyal customers. You&apos;ll always have direct communication and fast support from me.",
    icon: GlobeAltIcon,
  },
  {
    name: "Application Development",
    description:
      "Streamline your business with web applications that automate tasks and boost productivity. I take the time to understand your needs and deliver solutions that work for you. As a solo developer, I offer a personal touch and am always available for updates or support.",
    icon: CircleStackIcon,
  },
  {
    name: "Search Engine Optimisation (SEO)",
    description:
      "A beautiful website is only effective if people can find it. I use proven SEO strategies so your business ranks higher than your competitors and attracts more customers. You can always reach out to me directly for ongoing SEO support and advice—no middlemen involved.",
    icon: CursorArrowRaysIcon,
  },
];

function Services() {
  return (
    <div className="bg-white py-16 sm:py-20 mb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3 mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="transition-transform ease-in-out delay-50 hover:scale-110 hover:cursor-default flex flex-col rounded-sm bg-gray-100 p-5"
              >
                <dt className="flex items-center gap-x-3 font-semibold leading-7 text-gray-900 text-lg">
                  <feature.icon
                    className="h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-8 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Services;
