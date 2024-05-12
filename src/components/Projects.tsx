import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <>
      <div
        id="projects"
        className="max-w-7xl mx-auto py-8 lg:py-12 px-6 h-3/4 lg:h-1/2 bg-white"
      >
        <div className="gap-x-5 gap-y-5 grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 max-w-2xl lg:max-w-7xl mx-auto">
          <Link
            className="relative flex"
            href="https://jestinautoelectrics.com"
          >
            <Image
              src="/JestinAutoElectrics.jpg"
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
          <Link
            className="relative flex"
            href="https://perthliquidlimestone.com.au"
          >
            <Image
              src="/PerthLiquidLimestone.jpg"
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
