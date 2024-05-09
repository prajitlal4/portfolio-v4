import Image from "next/image";

function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-8 sm:py-12 lg:px-8 ">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          className="mx-auto h-12"
          src="/PerthLiquidLimestoneLogo.png"
          alt=""
          width={150}
          height={200}
        />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p className="text-sm md:text-lg">
              &quot;Prajit is an exceptional talent and I would recommend him to
              any business or person. He solved an issue within my website in 1
              day saving my business, something that had left other developers
              answer less and floundering for 5 months unresolved. He then went
              further and did SEO, made the entire site more user friendly and
              significantly boosted my rankings which continue to improve daily.
              Prajit is a true gentleman and a pleasure to deal with. He also
              has extensive knowledge across multiple disciplines from website
              design all the way through to the development of apps. I would
              recommend him to anybody except people in my industry because he
              gives me such a competitive advantage. I would sing from the
              rooftops about what Prajit has done for myself and business.&quot;
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Chris Price</div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">Owner</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Testimonial;
