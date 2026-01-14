import type { FooterProps } from "./footer.types";

export default function Footer({ content }: FooterProps) {
    return (
        <footer className="bg-gray-100 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-600 space-y-2">
                <p>{content.disclaimer}</p>
                <p>{content.affiliationNote}</p>
                <p>{content.credits}</p>
                <p>{content.year}</p>
            </div>
        </footer>
    );
}
