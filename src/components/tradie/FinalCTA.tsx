import Link from "next/link";

export default function TradieFinalCTA() {
  return (
    <section className="bg-gray-800 text-white py-16 text-center">
      <h2 className="text-3xl font-bold">Let’s Build You a Website That Works</h2>
      <p className="mt-4">Ready to get more enquiries? Send us a message — we’ll call you back.</p>
      <Link href="#contact" className="inline-block mt-6 rounded-md bg-blue-600 px-6 py-3 font-semibold">ENQUIRE NOW</Link>
    </section>
  );
}
