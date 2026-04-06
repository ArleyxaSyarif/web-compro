import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-[#F7FAF9]/80 backdrop-blur-xl fixed top-0 z-50 flex justify-between items-center w-full px-6 lg:px-12 py-5 border-b border-[#d8c3ac]/10 transition-all duration-300">

            {/* 1. LOGO SECTION (Diubah ke Image) */}
            <Link href="/" className="flex items-center group cursor-pointer">
                <img
                    src="/img/logo.png"
                    alt="Lamonte Logo"
                    className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </Link>

            {/* 2. NAVIGATION LINKS (Center) */}
            <nav className="hidden lg:flex items-center gap-10">
                <Link
                    href="/"
                    className="text-[10px] font-black font-[Inter] text-[#524433] uppercase tracking-[0.2em] hover:text-[#FFAA00] transition-colors relative group"
                >
                    Beranda
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFAA00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href="#keunggulan"
                    className="text-[10px] font-black font-[Inter] text-[#524433] uppercase tracking-[0.2em] hover:text-[#FFAA00] transition-colors relative group"
                >
                    Keunggulan
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFAA00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href="#mitra"
                    className="text-[10px] font-black font-[Inter] text-[#524433] uppercase tracking-[0.2em] hover:text-[#FFAA00] transition-colors relative group"
                >
                    Mitra Kami
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFAA00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href="#cara-pesan"
                    className="text-[10px] font-black font-[Inter] text-[#524433] uppercase tracking-[0.2em] hover:text-[#FFAA00] transition-colors relative group"
                >
                    Cara Pesan
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFAA00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href="/kontak"
                    className="text-[10px] font-black font-[Inter] text-[#524433] uppercase tracking-[0.2em] hover:text-[#FFAA00] transition-colors relative group"
                >
                    Kontak
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFAA00] transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>

            {/* 3. RIGHT SECTION (Toggle & Button) */}
            <div className="flex items-center gap-6">
                {/* Visual Theme Toggle */}
                <div className="hidden sm:flex items-center bg-[#F1F4F4] p-1 border border-[#d8c3ac]/20 shadow-inner rounded-full">
                    <button className="p-2 rounded-full transition-all duration-300 bg-white text-[#FFAA00] shadow-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">light_mode</span>
                    </button>
                    <button className="p-2 rounded-full transition-all duration-300 text-[#524433] hover:text-[#FFAA00] flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">dark_mode</span>
                    </button>
                </div>

                {/* CTA Button */}
                <Link
                    href="#kontak"
                    className="px-8 py-3 text-[10px] font-[Plus_Jakarta_Sans] font-black tracking-[0.2em] bg-[#FFAA00] text-[#181C1C] rounded-full shadow-lg shadow-[#825500]/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap uppercase"
                >
                    Hubungi Admin
                </Link>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden flex items-center">
                    <button className="text-[#181C1C] hover:text-[#FFAA00] transition-colors">
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </div>

        </header>
    );
}

