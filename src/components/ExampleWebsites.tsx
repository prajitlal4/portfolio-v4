import Image from "next/image";
import Link from "next/link";

const callouts = [
  {
    name: "E-Commerce",
    description:
      "A simple e-commerce site to drive your sales and build healthy customer relations.",
    imageSrc: "/ecommerce-example.PNG",
    imageAlt:
      "A simple e-commerce site to drive your sales and build healthy customer relations.",
    href: "#",
  },
  {
    name: "Marketing",
    description:
      "A clean marketing site to showcase your business and reach more clients.",
    imageSrc: "/marketing-example.PNG",
    imageAlt:
      "A clean marketing site to showcase your business and reach more clients.",
    href: "#",
  },
  {
    name: "Web-Application",
    description:
      "An extensive web-based application for managing your business.",
    imageSrc: "/application-example.PNG",
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
            Examples of what I can do
          </h2>
          <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="transition-[transform,opacity] ease-in-out delay-50 duration-300 group-hover:-translate-y-6 relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                    height={400}
                    width={400}
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-300">
                  <span className="absolute inset-0" />
                  {callout.name}
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
