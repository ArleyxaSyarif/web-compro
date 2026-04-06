import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-[1400px]">
                {/* Atur tinggi (h-24) Navbar sesuai pandangan mata seperti di desain */}
                <div className="flex h-24 items-center justify-between">

                    {/* 1. Logo Section */}
                    <div className="flex-shrink-0 flex flex-col relative shrink-0 pt-2 cursor-pointer">
                        {/* SVG Starburst Element (diletakkan menggunakan absolute) */}
                        <div className="absolute -top-3 left-[35%] text-gray-800">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v20" />
                                <path d="M2 12h20" />
                                <path d="M4.93 4.93l14.14 14.14" />
                                <path d="M19.07 4.93L4.93 19.07" />
                            </svg>
                        </div>

                        {/* Teks "lamonte" dengan font serif agar persis seperti gambar */}
                        <div className="text-[28px] md:text-[32px] font-serif text-gray-900 leading-none tracking-tight">
                            lamonte
                        </div>

                        {/* Teks ".ID" berukuran kecil dengan spasi sangat jauh */}
                        <div className="text-[7px] font-sans text-gray-600 tracking-[0.45em] uppercase mt-1 pl-[2px] text-center">
                            .id
                        </div>
                    </div>

                    {/* 2. Center Navigation Links */}
                    <nav className="hidden lg:flex space-x-12 ml-8 xl:ml-20">
                        <Link href="#layanan" className="text-[11px] font-bold font-sans text-[#6B7280] uppercase tracking-[0.18em] hover:text-gray-900 transition-colors">
                            Layanan
                        </Link>
                        <Link href="#keunggulan" className="text-[11px] font-bold font-sans text-[#6B7280] uppercase tracking-[0.18em] hover:text-gray-900 transition-colors">
                            Keunggulan
                        </Link>
                        <Link href="#mitra" className="text-[11px] font-bold font-sans text-[#6B7280] uppercase tracking-[0.18em] hover:text-gray-900 transition-colors">
                            Mitra Kami
                        </Link>
                        <Link href="#cara-pesan" className="text-[11px] font-bold font-sans text-[#6B7280] uppercase tracking-[0.18em] hover:text-gray-900 transition-colors">
                            Cara Pesan
                        </Link>
                        <Link href="#kontak" className="text-[11px] font-bold font-sans text-[#6B7280] uppercase tracking-[0.18em] hover:text-gray-900 transition-colors">
                            Kontak
                        </Link>
                    </nav>

                    {/* 3. CTA Button */}
                    <div className="hidden md:flex items-center">
                        {/* Tombol tanpa rounded (kotak) bewarna gold-kusam menyerupai gambar */}
                        <Link
                            href="#kontak"
                            className="bg-[#C19E70] text-white px-8 py-[14px] text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#a6865c] transition-colors"
                        >
                            Hubungi Admin
                        </Link>
                    </div>

                    {/* Hamburger Menu (Bila dibuka di layat kecil / Mobile) */}
                    <div className="lg:hidden flex items-center">
                        <button type="button" className="text-gray-500 hover:text-gray-900 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
}