import Image from "next/image";
import React from "react";

export default function TradieHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Websites That Get Tradies Hired, Not Just Seen
          </h1>
          <p className="text-lg text-gray-700">
            Perth electricians, plumbers, carpenters, builders &amp; more.
          </p>
          <p className="text-gray-500">Fast. Affordable. Built for leads.</p>
        </div>
        <div className="bg-gray-50 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">GET IN TOUCH</h2>
          <form className="space-y-4">
            <input type="text" name="name" placeholder="Name" className="w-full rounded-md border-gray-300" />
            <input type="tel" name="phone" placeholder="Phone" className="w-full rounded-md border-gray-300" />
            <input type="email" required name="email" placeholder="Email" className="w-full rounded-md border-gray-300" />
            <textarea name="message" placeholder="Message" rows={3} className="w-full rounded-md border-gray-300" />
            <label className="flex items-center space-x-2 text-sm text-gray-700">
              <input type="checkbox" className="rounded" />
              <span>I’d like a free review of my current website</span>
            </label>
            <button type="submit" className="w-full rounded-md bg-blue-600 text-white font-semibold py-2">ENQUIRE NOW</button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already got a website? We’ll review it for free and show you how to get more leads.
          </p>
        </div>
      </div>
    </section>
  );
}
