"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Example() {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <video
        muted
        autoPlay
        loop
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        height={1080}
        width={1920}
      >
        <source
          src="https://portfolio1.syd1.cdn.digitaloceanspaces.com/PL%20Solutions%20Video.mp4"
          type="video/mp4"
        />
        Your browser does not support this video tag.
      </video>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="bg-gray-200 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-700 ring-1 ring-white/10 hover:ring-white/20">
            <strong>Check out our example projects! </strong>
            <a href="#" className="font-semibold text-gray-900">
              <span className="absolute inset-0" aria-hidden="true" />
              Click here <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div
          className={`transition-opacity duration-1000 ease-in-out delay-50 text-center ${pageLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            How can we help you achieve greatness?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 mx-5 md:mx-auto">
            Need a website or an application? We can create amazing websites and
            solutions to help scale your business, traffic and customer
            satisfaction to new heights.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="transition ease-in-out delay-50 hover:scale-110 rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
            >
              Contact us!
            </Link>
            <Link
              href="#about"
              className="transition ease-in-out delay-50 hover:scale-110 text-sm font-semibold text-gray-900 border rounded-md bg-gray-100 px-3.5 py-2.5 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
            >
              Who are we?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
