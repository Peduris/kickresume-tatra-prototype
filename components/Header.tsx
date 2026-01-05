"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="bg-[#212121] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Hashtag */}
          <div className="flex items-center space-x-3">
            {logoError ? (
              // Fallback logo if image fails to load
              <div className="flex flex-col">
                <div className="border border-white px-2 py-1 flex items-end space-x-2 mb-1">
                  <div className="flex items-end space-x-1">
                    <div className="w-0.5 bg-white" style={{ height: "12px", transform: "skewY(-2deg)" }} />
                    <div className="w-0.5 bg-white" style={{ height: "16px", transform: "skewY(-2deg)" }} />
                    <div className="w-0.5 bg-white" style={{ height: "20px", transform: "skewY(-2deg)" }} />
                  </div>
                  <span className="text-white font-bold italic text-lg">TB</span>
                </div>
                <div className="text-white text-xs font-bold uppercase">TATRA BANKA</div>
              </div>
            ) : (
              <Image
                src="/TBlogo.png"
                alt="Tatra Banka Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
                onError={() => setLogoError(true)}
              />
            )}
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
