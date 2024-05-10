function Content() {
  return (
    <div id="about" className="bg-white py-8 sm:py-12 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Passion for coding and problem solving.
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 md:max-w-none md:grid-cols-2">
            <div>
              <strong className="text-lg">Little bit about us</strong>
              <p>
                We are a Perth based software company that specialises in
                creating websites and web applications to the highest quality,
                and are always on the lookout for new and exciting projects.
              </p>
              <p className="mt-8">
                If you are looking for a custom, high quality product, or
                looking to bring your current project to the next level, come to
                us first.
              </p>
            </div>
            <div>
              <strong className="text-lg">Our mission</strong>
              <p>
                We strive to provide only the best service possible. We believe
                that a happy client is a returning client, and will do
                everything we can to make sure you are satisfied with the end
                product.
              </p>
              <p className="mt-8">
                Whether you are a small business looking to expand, we&apos;re
                always available for a chat to see if my services are right for
                you. Feel free to reach out to us at any time.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
