import { Link } from "react-router-dom";
import type { HeaderProps } from "./header.types";

export default function Header({
    appName,
    navItems,
    demoBadgeLabel
}: HeaderProps) {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="font-semibold text-lg tracking-wide">
                    {appName}
                </div>

                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.route}
                            to={item.route}
                            className="hover:text-gray-600"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="text-sm font-semibold text-blue-700">
                    {demoBadgeLabel}
                </div>
            </div>
        </header>

    );
}
