"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const servicePills = [
  "Website Development",
  "Google Business Profile Management",
  "SEO Optimization",
  "Website Maintenance & Security",
  "Support & Consulting",
];

export default function Hero() {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <section className="relative bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Headline and content */}
        <div className="flex-1 w-full max-w-xl">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mt-2">
              Websites That Get You Leads, Not Just Seen.
            </h1>
            <p className="mt-6 text-lg text-gray-200" style={{ fontSize: '18px' }}>
              From the first click to the final quote, I help you land real jobs with proven digital strategies tailored to your business.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            {servicePills.map((pill) => (
              <span key={pill} className="bg-blue-700 text-white font-semibold rounded px-4 py-2 text-sm">
                {pill}
              </span>
            ))}
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">GET IN TOUCH</h2>
            <form name="contact" method="POST" data-netlify="true" className="space-y-5">
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-gray-100 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-base"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email *"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-gray-100 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-base"
              />
              <textarea
                name="message"
                rows={4}
                required
                placeholder="How can we help your business?"
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-gray-100 focus:ring-2 focus:ring-blue-700 focus:border-blue-700 text-base"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-800 transition-colors"
              >
                ENQUIRE NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
