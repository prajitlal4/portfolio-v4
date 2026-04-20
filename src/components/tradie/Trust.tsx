import Image from "next/image";

export default function TradieTrust() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60" alt="Tradie website" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 relative">
          <Image src="/PerthLiquidLimestoneLogo.png" alt="logo" width={80} height={40} className="absolute -top-6 left-6" />
          <blockquote className="mt-6">
            <p className="text-lg font-semibold text-gray-900">“Turned my old website into something that actually gets me work.”</p>
            <footer className="mt-4 text-gray-700">Matt D., Owner — Perth Precision Plumbing</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
