import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

function Projects() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8 lg:py-12 px-6 h-3/4 lg:h-1/2 bg-white">
        <div className="grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 max-w-2xl lg:max-w-7xl mx-auto">
          <Link className="relative flex" href="#">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
              height={500}
              width={500}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="transition ease-in-out delay-50 hover:bg-opacity-60 relative flex w-full flex-col items-start justify-end bg-black bg-opacity-30 p-8 sm:p-12">
              <h2 className="text-xl font-medium text-white text-opacity-75">
                New Website Development
              </h2>
              <p className="mt-1 text-3xl font-medium text-white">
                Jestin Auto Electrics
              </p>
            </div>
          </Link>
          <Link className="relative flex" href="#">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
              height={500}
              width={500}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="transition ease-in-out delay-50 hover:bg-opacity-60 relative flex w-full flex-col items-start justify-end bg-black bg-opacity-30 p-8 sm:p-12">
              <h2 className="text-xl font-medium text-white text-opacity-75">
                Website Update
              </h2>
              <p className="mt-1 text-3xl font-medium text-white">
                Perth Liquid Limestone
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Projects;
