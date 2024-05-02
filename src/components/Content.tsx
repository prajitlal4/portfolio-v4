function Content() {
  return (
    <div className="bg-white py-8 sm:py-12 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Passion for coding and problem solving.
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 md:max-w-none md:grid-cols-2">
            <div>
              <strong>Little bit about myself</strong>
              <p>
                Thank you for dropping by. I&apos;m Prajit, a software developer
                based in Perth, Western Australia. I develop websites and
                web-applications to the highest quality, and I&apos;m always on
                the lookout for new and exciting projects.
              </p>
              <p className="mt-8">
                If you are looking for a custom, high quality product, or
                looking to bring your current project to the next level, I am
                your guy.
              </p>
            </div>
            <div>
              <strong>My mission</strong>
              <p>
                I strive to provide only the best service possible. I believe
                that a happy client is a returning client, and I will do
                everything I can to make sure you are satisfied with the end
                product.
              </p>
              <p className="mt-8">
                Whether you are a small business looking to expand, I&apos;m
                always available for a chat to see if my services are right for
                you. Feel free to reach out to me at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
