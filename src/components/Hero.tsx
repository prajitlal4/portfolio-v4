import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-12 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              How can I help you achieve greatness?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hi! My name is Prajit. I can create amazing personalised websites
              and apps, and help scale your business traffic, sales and customer
              satisfaction to new heights.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#"
                className="transition ease-in-out delay-50 hover:scale-110 rounded-md bg-blue-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
              >
                Contact me!
              </Link>
              <Link
                href="#"
                className="transition ease-in-out delay-50 hover:scale-110 text-sm font-semibold text-gray-900 border rounded-md bg-gray-100 px-3.5 py-2.5 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
              >
                Who is Prajit?
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 xl:col-span-6 px-6 max-w-2xl mx-auto lg:mx-0">
          <Image
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full rounded-sm"
            src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
            alt=""
            height={1920}
            width={1080}
          />
        </div>
      </div>
    </div>
  );
}
