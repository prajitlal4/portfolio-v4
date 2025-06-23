const steps = [
  "Send us your details — we’ll call you back",
  "We show you exactly how we’ll help",
  "Your new website goes live and gets you leads",
];

export default function TradieHow() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">How It Works</h2>
        <ol className="space-y-6">
          {steps.map((s, i) => (
            <li key={i} className="flex items-start space-x-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">{i + 1}</span>
              <p className="text-gray-700">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
