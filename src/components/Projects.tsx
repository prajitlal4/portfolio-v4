'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <div
        id="projects"
        className="max-w-7xl mx-auto py-8 lg:py-12 px-6 bg-white mt-12 mb-2"
      >
        <div className="gap-x-5 gap-y-5 grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 max-w-2xl lg:max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              className="relative flex group"
              href="https://jestinautoelectrics.com"
            >
              <Image
                src="/JestinAutoElectrics.jpg"
                height={500}
                width={500}
                alt="Jestin Auto Electrics website screenshot"
                className="absolute inset-0 h-full w-full object-cover object-center rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/60 rounded-2xl z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-40 transition-opacity duration-200 rounded-2xl z-20 pointer-events-none" />
              <div className="transition ease-in-out delay-50 relative flex w-full flex-col items-start justify-end p-8 sm:p-12 rounded-2xl z-30">
                <h2 className="text-lg font-semibold text-white mb-1">
                  Custom Website Launch
                </h2>
                <p className="mt-1 text-2xl font-semibold text-white">
                  Jestin Auto Electrics
                </p>
                <p className="mt-2 text-base text-white">
                  Delivered a high-performance, SEO-optimised website that helped this business attract more clients and stand out in their industry. I provide direct communication and ongoing support for every client.
                </p>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <Link
              className="relative flex group"
              href="https://perthliquidlimestone.com.au"
            >
              <Image
                src="/PerthLiquidLimestone.jpg"
                height={500}
                width={500}
                alt="Perth Liquid Limestone website screenshot"
                className="absolute inset-0 h-full w-full object-cover object-center rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/60 rounded-2xl z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-40 transition-opacity duration-200 rounded-2xl z-20 pointer-events-none" />
              <div className="transition ease-in-out delay-50 relative flex w-full flex-col items-start justify-end p-8 sm:p-12 rounded-2xl z-30">
                <h2 className="text-lg font-semibold text-white mb-1">
                  Website Revamp & SEO Boost
                </h2>
                <p className="mt-1 text-2xl font-semibold text-white">
                  Perth Liquid Limestone
                </p>
                <p className="mt-2 text-base text-white">
                  Upgraded an existing website for better usability, faster load times, and higher Google rankings. My hands-on approach means clients always have direct access to me for updates and support.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Projects;
