import {type  CapabilitiesGridProps } from "./capabilities.types";

export default function CapabilitiesGrid({ items }: CapabilitiesGridProps) {
  return (
<section className="bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-semibold mb-12">
      Core Platform Capabilities
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
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
  </div>
</section>

  );
}
