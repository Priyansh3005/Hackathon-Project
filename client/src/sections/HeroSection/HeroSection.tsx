import { Link } from "react-router-dom";
import type { HeroSectionProps } from "./hero.types";

export default function HeroSection({
    headline,
    subheading,
    ctas
}: HeroSectionProps) {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid gap-10">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-4xl">
                    {headline}
                </h1>

                <p className="text-lg text-gray-700 max-w-3xl">
                    {subheading}
                </p>

                <div className="flex flex-wrap gap-4">
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
