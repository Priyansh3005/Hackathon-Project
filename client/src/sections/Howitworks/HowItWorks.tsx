import type { HowItWorksProps } from "./howitworks.types";

export default function HowItWorks({ steps }: HowItWorksProps) {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl font-semibold mb-12">
                    How It Works
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step) => (
                        <div key={step.stepNumber}>
                            <span className="text-blue-700 font-bold">
                                {String(step.stepNumber).padStart(2, "0")}
                            </span>

                            <h3 className="font-semibold text-lg mt-2 mb-1">
                                {step.title}
                            </h3>

                            <p className="text-sm text-gray-700 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
