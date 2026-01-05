"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#212121] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Hashtag */}
          <div className="flex items-center space-x-3">
            <div className="h-10 flex items-center">
              <Image
                src="/logo.png"
                alt="Tatra Banka Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
                onError={(e) => {
                  // Fallback: show text logo if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div class="flex items-end space-x-1 border border-white px-2 py-1">
                        <div class="flex items-end space-x-1">
                          <div class="w-0.5 bg-white" style="height: 12px; transform: skewY(-2deg);"></div>
                          <div class="w-0.5 bg-white" style="height: 16px; transform: skewY(-2deg);"></div>
                          <div class="w-0.5 bg-white" style="height: 20px; transform: skewY(-2deg);"></div>
                        </div>
                        <span class="text-white font-bold italic text-lg ml-2">TB</span>
                      </div>
                      <div class="ml-1">
                        <div class="text-white text-sm font-bold uppercase">TATRA BANKA</div>
                      </div>
                    `;
                  }
                }}
              />
            </div>
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
