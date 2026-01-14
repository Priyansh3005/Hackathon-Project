import type { TrustStripProps } from "./truststrip.types";
import { Link } from "react-router-dom";

export default function TrustStrip({ items }: TrustStripProps) {
  return (
<section className="bg-white border-t border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item) => (
        <div key={item.id} className="text-sm text-gray-700">
          <p className="leading-relaxed">
            {item.text}
          </p>

          {item.linkLabel && item.linkRoute && (
            <Link
              to={item.linkRoute}
              className="inline-block mt-2 text-blue-700 font-medium hover:underline"
            >
              {item.linkLabel}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
