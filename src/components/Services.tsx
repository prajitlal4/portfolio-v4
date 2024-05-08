import {
  CursorArrowRaysIcon,
  GlobeAltIcon,
  CircleStackIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Website Development",
    description:
      "Businesses with a website can grow up to 50% compared to those without. We will make you a website that your competitors will envy, or upgrade your current one to the best it can be.",
    icon: GlobeAltIcon,
  },
  {
    name: "Application Development",
    description:
      "Tired of using excel spreadsheets to manage your business? Web applications can cut down mundane tasks and increase productivity by tenfold. Let us build you an application that suites your needs.",
    icon: CircleStackIcon,
  },
  {
    name: "Search Engine Optimisation (SEO)",
    description:
      "Most users click on the first 3 links that appear on Google after making a search. We can make your website appear at the top of most google searches, so your potential customers see you first.",
    icon: CursorArrowRaysIcon,
  },
];

function Services() {
  return (
    <div className="bg-white lg:mt-16 py-8 sm:py-12 mb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3 mx-auto">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-sm bg-gray-100 p-5"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Services;
