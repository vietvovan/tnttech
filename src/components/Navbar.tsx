'use client';

import { useState } from 'react';
import Link from "next/link";
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdown, setBusinessDropdown] = useState(false);

  return (
    <nav>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
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

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-600 hover:text-blue-600"
        >
          {mobileMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="flex flex-col px-4 py-2">
            <Link
              href="/"
              className="py-2 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="py-2 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
            <div className="py-2">
              <button
                onClick={() => setBusinessDropdown(!businessDropdown)}
                className="w-full text-left hover:text-blue-600"
              >
                Lĩnh vực kinh doanh
              </button>
              {businessDropdown && (
                <div className="pl-4 mt-2">
                  {businessAreas.map((area) => (
                    <Link
                      key={area.href}
                      href={area.href}
                      className="block py-2 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="py-2 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 