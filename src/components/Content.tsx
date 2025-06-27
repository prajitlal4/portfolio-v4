'use client';
import Image from "next/image";
import { motion } from "framer-motion";

function Content() {
  return (
    <div id="about" className="bg-white py-8 sm:py-12 mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Building Trust Through Excellence in Web Development
          </h1>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-base leading-7 text-gray-700">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <strong className="text-lg">A Bit About Me</strong>
              <p>
                Hi! I&apos;m Prajit, a Perth-based software developer who loves helping businesses stand out online. I focus on building high-performance websites and web applications that are tailored to your needs. My approach is personal and transparent, and I always aim to make the process as smooth as possible for you.
              </p>
              <p>
                When you work with me, you get direct access to the person building your project. I&apos;m always available for support and updates, so you never have to worry about being left in the dark.
              </p>
              <div className="w-full flex justify-center mt-4">
                <Image
                  src="/application-example.PNG"
                  alt="Web application example"
                  className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                  width={400}
                  height={250}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <strong className="text-lg">My Mission</strong>
              <p>
                My mission is to help your business succeed online. I believe your website should work as hard as you do—attracting new clients and helping you stand out from the competition. That&apos;s why I focus on both beautiful design and technical excellence, including SEO best practices to help you rank higher and reach more customers.
              </p>
              <p>
                If you&apos;re ready to take your business to the next level, I&apos;m here to help. Let&apos;s have a chat about how I can support your goals and give you an edge over larger agencies.
              </p>
              <div className="w-full flex justify-center mt-4">
                <Image
                  src="/marketing-example.PNG"
                  alt="Marketing website example"
                  className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                  width={400}
                  height={250}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
