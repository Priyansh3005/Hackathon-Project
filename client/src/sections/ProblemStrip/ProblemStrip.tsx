import type { ProblemStripProps } from "./problemstrip.types";

export default function ProblemStrip({ items }: ProblemStripProps) {
  return (
<section className="bg-gray-100 border-t border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
    {items.map((item) => (
      <div key={item.id}>
        <h3 className="font-semibold text-lg mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</section>

  );
}
