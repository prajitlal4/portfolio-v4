import Link from "next/link";

function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-8 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-sm sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Are you ready to propel your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            What are you waiting for? Let&apos;s get started on your project
            today!
          </p>
          <div className=" flex items-center justify-center">
            <form>
              <div className="mt-10 flex gap-x-4 flex-col md:flex-row gap-y-4">
                <label htmlFor="email-address" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="min-w-0 text-center flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Name"
                />
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 text-center flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact us
                </button>
              </div>
            </form>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="1"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop offset="0%" stopColor="#0B3C73" />
                <stop offset="100%" stopColor="#042F58" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CTA;
