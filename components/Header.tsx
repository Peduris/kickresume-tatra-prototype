"use client";

import Link from "next/link";
import TatraBankaLogo from "./TatraBankaLogo";

export default function Header() {
  return (
    <header className="bg-[#212121] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Hashtag */}
          <div className="flex items-center space-x-3">
            <TatraBankaLogo />
            <span className="text-white text-sm">#prirodzenenajlepsi</span>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors text-sm">
              Dve značky
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors text-sm">
              Spoznaj nás
            </Link>
            <Link href="/benefits" className="text-white hover:text-gray-300 transition-colors text-sm">
              Benefity
            </Link>
            <Link href="/support" className="text-white hover:text-gray-300 transition-colors text-sm">
              Podporujeme
            </Link>
            <Link href="/inspire" className="text-white hover:text-gray-300 transition-colors text-sm">
              Inšpiruj sa
            </Link>
            <Link href="/careers" className="text-white hover:text-gray-300 transition-colors text-sm">
              Chceme ťa
            </Link>
            <Link href="/life" className="text-white hover:text-gray-300 transition-colors text-sm">
              Z nášho života
            </Link>
          </div>

          {/* Right: CTA Button */}
          <Link
            href="/positions"
            className="bg-[#F5E6D3] text-[#212121] px-4 py-2 rounded font-medium hover:bg-[#E8D4B8] transition-colors text-sm"
          >
            Voľné pozície
          </Link>
        </div>
      </nav>
    </header>
  );
}
