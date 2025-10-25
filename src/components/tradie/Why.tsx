import { BoltIcon, ClockIcon, BriefcaseIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "We talk straight and get it done",
    icon: BoltIcon,
  },
  {
    name: "Live websites delivered fast — no long delays",
    icon: ClockIcon,
  },
  {
    name: "Built to bring in real jobs, not just look pretty",
    icon: BriefcaseIcon,
  },
];

export default function TradieWhy() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Why Tradies Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.name} className="text-center p-6 bg-gray-50 rounded-lg shadow">
              <f.icon className="h-8 w-8 text-blue-600 mx-auto" />
              <p className="mt-4 font-semibold text-gray-900">{f.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
