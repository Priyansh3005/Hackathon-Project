import { Link } from "react-router-dom";
import type { FinalCTAProps } from "./FinalCTA.types";

export default function FinalCTA({ heading, ctas }: FinalCTAProps) {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl font-semibold mb-8">
                    {heading}
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {ctas.map((cta) => (
                        <Link
                            key={cta.route}
                            to={cta.route}
                            className={
                                cta.variant === "primary"
                                    ? "px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-800"
                                    : "px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-100"
                            }
                        >
                            {cta.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    );
}
