// app/components/Footer.js
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Glossary", href: "/glossary" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  return (
    <footer className="bg-blue-800 text-gray-50">
      {/* ================= Desktop Footer ================= */}
      <div className="hidden md:flex flex-col items-center justify-center h-[120px]">
        <div className="flex items-center gap-12 mb-5">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-normal leading-5 hover:text-blue-200 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <p className="text-sm leading-4 opacity-90">
          © 2025 ScamRx. All rights reserved.
        </p>
      </div>

      {/* ================= Mobile Footer ================= */}
      <div className="md:hidden py-6 px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base leading-5 hover:text-blue-200 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <p className="text-sm leading-4 text-center opacity-90">
          © 2025 ScamRx. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
