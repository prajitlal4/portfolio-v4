import Link from "next/link";

const callouts = [
  {
    name: "E-Commerce",
    description:
      "A simple e-commerce site to drive your sales and build healthy customer relations.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "A simple e-commerce site to drive your sales and build healthy customer relations.",
    href: "https://example-project-1-snowy.vercel.app",
  },
  {
    name: "Marketing",
    description:
      "A clean marketing site to showcase your business and reach more clients.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "A clean marketing site to showcase your business and reach more clients.",
    href: "#",
  },
  {
    name: "Web-Application",
    description:
      "An extensive web-based application for managing your business.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "An extensive web-based application for managing your business.",
    href: "#",
  },
];

function ExampleWebsites() {
  return (
    <div id="examples" className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold text-gray-100">
            See it for yourself!
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Check out some our demo websites to see what we can do for you.
          </p>
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="transition-[transform,opacity] ease-in-out delay-50 duration-300 group-hover:-translate-y-6 relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-300">
                  <Link href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h3>
                <p className="mt-2 text-base font-semibold text-gray-200">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleWebsites;
