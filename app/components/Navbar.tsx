'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    // Mencegah scroll body saat modal/menu terbuka
    useEffect(() => {
        if (isMenuOpen || isContactModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen, isContactModalOpen]);

    const navLinks = [
        { name: 'Beranda', href: '/' },
        { name: 'Keunggulan', href: '#keunggulan' },
        { name: 'Mitra Kami', href: '#mitra' },
        { name: 'Cara Pesan', href: '#cara-pesan' },
        { name: 'Kontak', href: '/kontak' },
    ];

    return (
        <>
            <header className="bg-[#F7FAF9]/80 backdrop-blur-xl fixed top-0 z-50 flex justify-between items-center w-full px-6 lg:px-12 py-5 border-b border-[#d8c3ac]/10 transition-all duration-300">

                {/* 1. LOGO SECTION */}
                <Link href="/" className="flex items-center group cursor-pointer relative z-[60]">
                    <img
                        src="/img/logo.png"
                        alt="Lamonte Logo"
                        className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* 2. NAVIGATION LINKS (Desktop) */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-black font-[Inter] text-[#524433] uppercase tracking-[0.2em] hover:text-[#FFAA00] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FFAA00] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* 3. RIGHT SECTION (Toggle & Button) */}
                <div className="flex items-center gap-4 lg:gap-6 relative z-[60]">
                    {/* Visual Theme Toggle (Desktop Only) */}
                    <div className="hidden sm:flex items-center bg-[#F1F4F4] p-1 border border-[#d8c3ac]/20 shadow-inner rounded-full">
                        <div className="p-2 rounded-full bg-white text-[#FFAA00] shadow-sm flex items-center justify-center">
                            <span className="material-symbols-outlined text-sm">light_mode</span>
                        </div>
                        <div className="p-2 rounded-full text-[#524433] flex items-center justify-center opacity-40">
                            <span className="material-symbols-outlined text-sm">dark_mode</span>
                        </div>
                    </div>

                    {/* CTA Button (Desktop - Opens Modal) */}
                    <button
                        onClick={() => setIsContactModalOpen(true)}
                        className="hidden md:block px-8 py-3 text-[10px] font-[Plus_Jakarta_Sans] font-black tracking-[0.2em] bg-[#FFAA00] text-[#181C1C] rounded-full shadow-lg shadow-[#825500]/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap uppercase"
                    >
                        Hubungi Admin
                    </button>

                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-[#181C1C] hover:text-[#FFAA00] transition-colors flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </header>

            {/* ===== MOBILE MENU OVERLAY (Drawer) ===== */}
            <div
                className={`fixed inset-0 z-[55] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-[#181C1C]/40 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Menu Content */}
                <div
                    className={`absolute top-0 right-0 w-[80%] max-w-sm h-screen bg-white shadow-2xl transition-transform duration-500 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex flex-col h-full pt-32 p-8">
                        <nav className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xl font-bold text-[#181C1C] hover:text-[#FFAA00] transition-colors border-b border-[#F1F4F4] pb-4"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="mt-auto pb-12">
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsContactModalOpen(true);
                                }}
                                className="w-full bg-[#FFAA00] text-[#181C1C] py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-[#825500]/10"
                            >
                                Hubungi Admin
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== HUBUNGI ADMIN MODAL ===== */}
            <div
                className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${isContactModalOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
                {/* Modal Backdrop */}
                <div
                    className="absolute inset-0 bg-[#181C1C]/60 backdrop-blur-md"
                    onClick={() => setIsContactModalOpen(false)}
                ></div>

                {/* Modal Content */}
                <div className={`relative bg-white w-full max-w-lg rounded-[2.5rem] p-8 md:p-12 shadow-2xl transition-all duration-500 transform ${isContactModalOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}>

                    <button
                        onClick={() => setIsContactModalOpen(false)}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#f1f4f4] flex items-center justify-center hover:bg-[#FFAA00] hover:text-white transition-all"
                    >
                        <span className="material-symbols-outlined text-[#181C1C]">close</span>
                    </button>

                    <div className="text-center mb-10">
                        <div className="w-20 h-20 bg-[#FFAA00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-[#825500] text-4xl">support_agent</span>
                        </div>
                        <h3 className="text-3xl font-[Plus_Jakarta_Sans] font-black text-[#181C1C] mb-2 leading-tight">Hubungi Admin</h3>
                        <p className="text-[#524433] opacity-70 font-[Inter]">Pilih saluran komunikasi yang paling nyaman bagi Anda.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            className="flex items-center gap-6 p-6 bg-[#25D366]/5 hover:bg-[#25D366]/10 border border-[#25D366]/20 rounded-3xl group transition-all"
                        >
                            <div className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#181C1C]">WhatsApp Admin</h4>
                                <p className="text-xs text-[#524433] opacity-60 uppercase font-bold tracking-widest mt-1">Grosir & Partai Besar</p>
                            </div>
                        </a>

                        <Link
                            href="/kontak"
                            onClick={() => setIsContactModalOpen(false)}
                            className="flex items-center gap-6 p-6 bg-[#FFAA00]/5 hover:bg-[#FFAA00]/10 border border-[#FFAA00]/20 rounded-3xl group transition-all"
                        >
                            <div className="w-14 h-14 bg-[#FFAA00] text-[#181C1C] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">mail</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#181C1C]">Kirim Form Pertanyaan</h4>
                                <p className="text-xs text-[#524433] opacity-60 uppercase font-bold tracking-widest mt-1">Proposal & Business Inquiry</p>
                            </div>
                        </Link>
                    </div>

                    <p className="mt-10 text-[10px] text-center text-[#524433] opacity-50 uppercase font-bold tracking-[0.2em]">
                        Aktif: Senin – Sabtu, 08:00 – 17:00 WIB
                    </p>
                </div>
            </div>
        </>
    );
}

