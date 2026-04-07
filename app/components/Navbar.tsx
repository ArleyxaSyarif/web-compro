'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Mencegah scroll body saat menu terbuka agar tidak "double scroll"
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Service', href: '#service' },
        { name: 'Why us', href: '#why-us' },
        { name: 'Clients', href: '#clients' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.replace('#', '');
            const elem = document.getElementById(targetId);
            if (elem) {
                const offset = 80;
                const elementPosition = elem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                setIsMenuOpen(false);
            }
        }
    };

    return (
        <>
            {/* Navigasi Utama */}
            <header className="bg-white fixed top-0 z-[100] w-full border-b border-[#181C1C]/5 h-20 md:h-24 flex items-center">
                <div className="w-full mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center transition-all duration-300">

                    {/* LOGO - Selalu di atas (z-70) */}
                    <Link href="/" className="relative z-[110] flex flex-col items-start text-[#181C1C]">
                        <div className="flex flex-col items-center leading-none">
                            <span className="text-[20px] md:text-[24px] font-serif font-bold tracking-tight">lumera</span>
                            <span className="text-[8px] md:text-[9px] font-sans text-[#c9a675] font-bold uppercase tracking-[0.4em] mt-0.5">Global</span>
                        </div>
                    </Link>

                    {/* DESKTOP MENU */}
                    <nav className="hidden lg:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-[11px] font-bold font-sans text-[#181C1C] uppercase tracking-[0.2em] hover:text-[#c9a675] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* RIGHT SIDE ACTIONS */}
                    <div className="flex items-center gap-4 relative z-[110]">
                        <button
                            onClick={() => {
                                const contactElem = document.getElementById('contact');
                                if (contactElem) {
                                    window.scrollTo({ top: contactElem.offsetTop - 80, behavior: 'smooth' });
                                }
                            }}
                            className="hidden md:block px-8 py-3.5 text-[10px] font-sans font-bold tracking-[0.2em] bg-[#c9a675] text-white rounded-xl hover:bg-[#181C1C] transition-all duration-500 uppercase shadow-lg shadow-[#c9a675]/20"
                        >
                            Request Quote
                        </button>

                        {/* Burger Icon Custom */}
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="p-2 text-[#181C1C] lg:hidden flex flex-col items-end gap-1.5 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <span className={`h-0.5 bg-[#181C1C] transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}></span>
                            <span className={`h-0.5 bg-[#181C1C] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
                            <span className={`h-0.5 bg-[#181C1C] transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'}`}></span>
                        </button>
                    </div>
                </div>

                {/* MODAL FULL-SCREEN MOBILE MENU */}
                <div 
                    className={`fixed inset-0 bg-white z-[105] lg:hidden transition-all duration-500 ease-in-out ${
                        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}
                >
                    {/* Interior Mobile Menu */}
                    <div className="flex flex-col h-full pt-32 pb-12 px-8 relative overflow-y-auto">
                        
                        {/* Background subtle grid agar selaras dengan Hero */}
                        <div 
                            className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{
                                backgroundImage: `linear-gradient(#181C1C 1px, transparent 1px), linear-gradient(90deg, #181C1C 1px, transparent 1px)`,
                                backgroundSize: '30px 30px'
                            }}
                        ></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <span className="text-[#c9a675] font-sans font-bold tracking-[0.3em] text-[10px] uppercase mb-8 opacity-60">Navigation</span>
                            
                            <nav className="flex flex-col gap-6 mb-12">
                                {navLinks.map((link, i) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleScroll(e, link.href)}
                                        className={`text-4xl font-serif font-bold text-[#181C1C] transition-all duration-700 transform ${
                                            isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                                        }`}
                                        style={{ transitionDelay: `${i * 75}ms` }}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className={`mt-auto pt-8 border-t border-[#181C1C]/5 transition-all duration-700 delay-[400ms] ${
                                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}>
                                <div className="mb-10">
                                    <h4 className="text-[10px] font-sans font-bold tracking-[0.2em] text-[#c9a675] uppercase mb-4">Contact Details</h4>
                                    <p className="text-xl font-serif text-[#181C1C] mb-1">lumerasgp@gmail.com</p>
                                    <p className="text-xl font-serif text-[#181C1C]">+65 9084 6600</p>
                                </div>
                                
                                <button 
                                    onClick={() => {
                                        const contactElem = document.getElementById('contact');
                                        setIsMenuOpen(false);
                                        setTimeout(() => contactElem?.scrollIntoView({ behavior: 'smooth' }), 300);
                                    }}
                                    className="w-full bg-[#181C1C] text-white py-5 rounded-2xl font-sans font-bold text-[11px] uppercase tracking-[0.2em] shadow-xl active:scale-[0.98] transition-transform"
                                >
                                    Request Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
