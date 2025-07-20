'use client';
import Image from "next/image";
import { motion } from "framer-motion";

function Content() {
  return (
    <div id="about" className="bg-white py-8 sm:py-12 mt-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 lg:max-w-none">
          <h2 className="mt-2 text-4xl max-w-3xl sm:text-left font-bold tracking-tight text-gray-900 sm:text-5xl">
            Building Trust Through Excellence in Web Development
          </h2>
          <div className="mt-10 flex flex-col gap-20">
            {/* Row 1: Text left, image right */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="flex-1 flex flex-col gap-6 order-1 md:order-1 text-[18px] leading-7 text-gray-700"
              >
                <strong className="text-2xl sm:text-3xl">Your Strategic Partner in Digital Growth</strong>
                <p className="text-lg sm:text-xl">I&apos;m Prajit, a Perth-based software developer dedicated to helping businesses grow online through high-performance websites and applications. <br /><br /> My process is personal, transparent, and streamlined from day one so you get clarity and results without the confusion. With direct access to me at every step, you&apos;re always informed and never left in the dark.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex-1 flex justify-center order-2 md:order-2"
              >
                <Image
                  src="/partnership.svg"
                  alt="Web application example"
                  width={400}
                  height={250}
                />
              </motion.div>
            </div>
            {/* Row 2: Image left, text right */}
            <div className="flex flex-col md:flex-row items-center gap-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex-1 flex justify-center order-2 md:order-1"
              >
                <Image
                  src="/website-traffic.svg"
                  alt="Marketing website example"
                  width={400}
                  height={250}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex-1 flex flex-col gap-6 order-1 md:order-2 text-[18px] leading-7 text-gray-700"
              >
                <strong className="text-2xl sm:text-3xl">What Sets My Approach Apart</strong>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-green-500 text-xl mt-1">✓</div>
                    <div>
                      <strong className="block text-lg">Local-First Focus</strong>
                      <p className="text-base text-muted-foreground">I prioritise your Google Business Profile because it&apos;s what people see first when they search for businesses near them.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-green-500 text-xl mt-1">✓</div>
                    <div>
                      <strong className="block text-lg">Strategic Website Pairing</strong>
                      <p className="text-base text-muted-foreground">Your website is designed to match and support your profile, building trust with both Google and your customers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-green-500 text-xl mt-1">✓</div>
                    <div>
                      <strong className="block text-lg">No Wasted Effort</strong>
                      <p className="text-base text-muted-foreground">No blog spam or fluff. Just consistent, meaningful updates that improve rankings and bring in leads.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
