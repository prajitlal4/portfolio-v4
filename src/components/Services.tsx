'use client';

import { motion } from "framer-motion";
import { CodeBracketSquareIcon, WrenchScrewdriverIcon, MagnifyingGlassCircleIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Website Development",
    subtitle: "Launch a high-converting website that works 24/7 to grow your business and outshine competitors.",
    icon: CodeBracketSquareIcon,
  },
  {
    title: "Google Business Profile Management",
    subtitle: "Get more leads from Google by optimizing your profile and ensuring your business appears in the right places.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "SEO Optimization",
    subtitle: "Dominate page one of Google and watch qualified leads find you instead of your competition.",
    icon: MagnifyingGlassCircleIcon,
  },
  {
    title: "Website Maintenance & Security",
    subtitle: "Sleep soundly knowing your site is bulletproof, lightning-fast, and always generating revenue.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Support & Consulting",
    subtitle: "Get instant answers and strategic insights from me, and I will treat your success like my mission.",
    icon: UserGroupIcon,
  },
];

function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl text-center">
          Professional web development services
        </h2>
        {/* Top row: 3 cards */}
        <div className="mt-10 flex flex-col items-center gap-6 sm:mt-16">
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            {services.slice(0, 3).map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center justify-center p-10 hover:shadow-lg transition-shadow text-center w-full sm:w-[340px]"
              >
                <service.icon className="h-14 w-14 text-blue-700 mb-6" />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{service.title}</h3>
                  <p className="text-base text-gray-600">{service.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Bottom row: 2 cards */}
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center mt-6">
            {services.slice(3).map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center justify-center p-10 hover:shadow-lg transition-shadow text-center w-full sm:w-[340px]"
              >
                <service.icon className="h-14 w-14 text-blue-700 mb-6" />
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">{service.title}</h3>
                  <p className="text-base text-gray-600">{service.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
