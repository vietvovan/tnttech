'use client';

import Link from "next/link";
import { theme } from "@/config/theme";
import { useState } from "react";

const businessAreas = [
  {
    name: "Dịch vụ số hoá",
    href: "/services/digitalization",
  },
  {
    name: "Dịch vụ scan & nhập liệu",
    href: "/services/scan-data-entry",
  },
  {
    name: "Dịch vụ xử lý dữ liệu",
    href: "/services/data-processing",
  },
  {
    name: "Dịch vụ chuyển đổi số",
    href: "/services/digital-transformation",
  },
  {
    name: "Dịch vụ chỉnh lý hồ sơ tài liệu",
    href: "/services/document-management",
  },
  {
    name: "Dịch vụ tư vấn dự án công nghệ thông tin",
    href: "/services/it-consulting",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md font-bold" style={{ color: theme.colors.text.primary }}>
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="w-12 h-12" />
              <span className="text-[#ED2C2C]">Tech</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 hover:text-blue-600 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />)
                : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />)}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 flex items-center">
            <Link href="/" className="hover:text-blue-600">
              Trang chủ
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              Về chúng tôi
            </Link>
            <div className="relative group inline-block">
              <button className="hover:text-blue-600 py-2">
                Lĩnh vực kinh doanh
              </button>
              <div className="absolute left-[-16px] invisible opacity-0 group-hover:visible group-hover:opacity-100 w-64 bg-white shadow-lg rounded-lg py-2 z-50 -mt-1 transform transition-all duration-300 ease-in-out translate-y-2 group-hover:translate-y-0">
                {businessAreas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="block px-4 py-2 hover:text-blue-600 hover:bg-gray-200 transition-colors duration-200"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="hover:text-blue-600">
              Liên hệ
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
            <div className="relative">
              <button
                className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Lĩnh vực kinh doanh
              </button>
              <div className="pl-4 space-y-1">
                {businessAreas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 