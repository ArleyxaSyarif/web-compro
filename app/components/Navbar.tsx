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
        { name: 'Service', href: '#service' },
        { name: 'Why us', href: '#why-us' },
        { name: 'Clients', href: '#clients' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    // Fungsi Smooth Scroll Manual (Bulletproof untuk React/Next.js)
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.replace('#', '');
            const elem = document.getElementById(targetId);
            if (elem) {
                // Menghitung posisi scroll (dikurangi tinggi navbar agar tidak tertutup)
                const offset = 96; // Tinggi h-24 (96px)
                const elementPosition = elem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                setIsMenuOpen(false); // Tutup menu mobile
            }
        }
    };

    return (
        <>
            <header className="bg-white/90 backdrop-blur-xl fixed top-0 z-50 w-full border-b border-[#181C1C]/5 transition-all duration-300">
                <div className="w-full mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center h-24">

                    {/* 1. LOGO SECTION */}
                    <Link href="/" className="flex-shrink-0 flex flex-col items-start group cursor-pointer relative z-[60] text-[#181C1C]">
                        <div className="flex flex-col items-center leading-none">
                            <span className="material-symbols-outlined text-xl mb-0.5 text-[#181C1C]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                                brightness_low
                            </span>
                            <span className="text-[24px] font-serif font-bold tracking-tight text-[#181C1C]">
                                lumera
                            </span>
                            <span className="text-[9px] font-sans text-[#c9a675] font-bold uppercase tracking-[0.4em] mt-0.5">
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
                                onClick={(e) => handleScroll(e, link.href)}
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
                        <button
                            onClick={() => {
                                const contactElem = document.getElementById('contact');
                                if (contactElem) {
                                    window.scrollTo({ top: contactElem.offsetTop - 96, behavior: 'smooth' });
                                }
                            }}
                            className="hidden md:block px-10 py-4 text-[11px] font-sans font-bold tracking-[0.2em] bg-[#c9a675] text-white rounded-xl hover:bg-[#181C1C] hover:shadow-2xl transition-all duration-500 uppercase shadow-lg shadow-[#c9a675]/20 mr-8"
                        >
                            Request Quote
                        </button>

                        {/* Mobile Menu Trigger */}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-[#181C1C]">
                            <span className="material-symbols-outlined text-3xl">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU OVERLAY */}
                <div className={`fixed inset-0 bg-white z-[55] lg:hidden transition-transform duration-500 pt-32 px-6 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <nav className="flex flex-col gap-8 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-2xl font-serif text-[#181C1C] hover:text-[#c9a675]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}
