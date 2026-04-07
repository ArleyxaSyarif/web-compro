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
        { name: 'Service', href: '/' },
        { name: 'Why us', href: '#keunggulan' },
        { name: 'Clients', href: '#mitra' },
        { name: 'Process', href: '#cara-pesan' },
        { name: 'Contact', href: '/kontak' },
    ];

    return (
        <>
            <header className="bg-white/90 backdrop-blur-xl fixed top-0 z-50 w-full border-b border-[#181C1C]/5 transition-all duration-300">
                {/* Gunakan padding yang sama dengan Hero Section: px-6 md:px-16 lg:px-24 */}
                <div className="w-full mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center h-24">

                    {/* 1. LOGO SECTION */}
                    <Link href="/" className="flex-shrink-0 flex flex-col items-center group cursor-pointer relative z-[60] text-[#181C1C] transition-transform duration-300 group-hover:scale-105 pt-2">
                        <span className="material-symbols-outlined text-sm mb-1" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>
                            asterisk
                        </span>
                        <div className="flex flex-col items-center leading-none">
                            <span className="text-[26px] font-serif tracking-tight">
                                lumera
                            </span>
                            <span className="text-[8px] font-sans text-gray-600 uppercase tracking-[0.45em] mt-1 pl-[2px] text-center w-full">
                                Global
                            </span>
                        </div>
                    </Link>

                    {/* 2. NAVIGATION LINKS (Desktop) */}
                    <nav className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-bold font-sans text-[#181C1C] uppercase tracking-[0.2em] hover:text-[#c9a675] transition-colors relative"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* 3. RIGHT SECTION (Toggle & Button) */}
                    <div className="flex items-center gap-6 relative z-[60]">
                        {/* Visual Theme Toggle */}
                        <div className="hidden sm:flex items-center bg-[#F1F4F4] p-1 rounded-full border border-[#181C1C]/5">
                            <div className="p-1.5 px-3 rounded-full bg-white text-[#c9a675] shadow-sm flex items-center justify-center">
                                <span className="material-symbols-outlined text-[18px]">light_mode</span>
                            </div>
                            <div className="p-1.5 px-3 rounded-full text-[#181C1C] flex items-center justify-center opacity-30">
                                <span className="material-symbols-outlined text-[18px]">dark_mode</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        {/* CTA Button - Sekarang serasi dengan tombol di Hero Section */}
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="hidden md:block px-8 py-4 me-8 text-[11px] font-sans font-bold tracking-[0.2em] bg-[#c9a675] text-white rounded hover:brightness-110 hover:shadow-xl hover:-translate-y-0.5 transition-all uppercase shadow-lg shadow-[#c9a675]/20"
                        >
                            Request Quote
                        </button>

                        {/* Mobile Menu Trigger */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-[#181C1C] flex items-center justify-center"
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
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
                    <div className="flex flex-col h-full pt-32 p-8 overflow-y-auto">
                        <nav className="flex flex-col gap-8 mb-16">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xl font-bold text-[#181C1C] hover:text-[#C19E70] transition-colors border-b border-[#F1F4F4] pb-4"
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
                                className="w-full bg-[#C19E70] hover:bg-[#a6865c] text-white py-5 rounded-xl font-black uppercase tracking-widest text-sm"
                            >
                                Request Quote
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
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#f1f4f4] flex items-center justify-center hover:bg-[#C19E70] hover:text-white transition-all"
                    >
                        <span className="material-symbols-outlined text-[#181C1C]">close</span>
                    </button>

                    <div className="text-center mb-10 pt-4">
                        <div className="w-20 h-20 bg-[#C19E70]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-[#C19E70] text-4xl">support_agent</span>
                        </div>
                        <h3 className="text-3xl font-[Plus_Jakarta_Sans] font-black text-[#181C1C] mb-2 leading-tight">Get in Touch</h3>
                        <p className="text-[#524433] opacity-70 font-[Inter]">Connect with our team for apparel sourcing and production inquiries.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <a
                            href="https://wa.me/6581234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-6 p-6 bg-[#25D366]/5 hover:bg-[#25D366]/10 border border-[#25D366]/20 rounded-3xl group transition-all"
                        >
                            <div className="w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#181C1C]">WhatsApp Support</h4>
                                <p className="text-xs text-[#524433] opacity-60 uppercase font-bold tracking-widest mt-1">OEM & Sourcing Inquiries</p>
                            </div>
                        </a>

                        <Link
                            href="/contact"
                            onClick={() => setIsContactModalOpen(false)}
                            className="flex items-center gap-6 p-6 bg-[#C19E70]/5 hover:bg-[#C19E70]/10 border border-[#C19E70]/20 rounded-3xl group transition-all"
                        >
                            <div className="w-14 h-14 bg-[#C19E70] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                                <span className="material-symbols-outlined text-3xl">mail</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#181C1C]">Email Inquiry</h4>
                                <p className="text-xs text-[#524433] opacity-60 uppercase font-bold tracking-widest mt-1">Partnerships & Proposals</p>
                            </div>
                        </Link>
                    </div>

                    <p className="mt-10 text-[10px] text-center text-[#524433] opacity-50 uppercase font-bold tracking-[0.2em]">
                        Operational Hours: Mon – Fri, 09:00 – 18:00 SGT
                    </p>
                </div>
            </div>
        </>
    );
}