import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white text-[#181C1C] pt-24 pb-12 border-t border-[#d8c3ac]/20 font-sans relative overflow-hidden">

            {/* Subtle Ambient Glow (Light Mode) */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C19E70]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">

                    {/* Brand & Description (Kolom 1 & 2) */}
                    <div className="lg:col-span-2 flex flex-col items-start justify-start">
                        {/* Logo Lumera (Image Version) */}
                        <Link href="/" className="flex-shrink-0 flex mb-8 flex-col items-center group cursor-pointer relative z-[60] text-[#181C1C] transition-transform duration-300 group-hover:scale-105 pt-2">
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

                        <p className="text-[#524433] text-sm leading-relaxed max-w-sm mb-8 opacity-70 font-[Inter]">
                            A premier apparel sourcing and trading hub coordinating reliable production across manufacturing hubs in Asia.
                        </p>

                        {/* Social Media Buttons dengan Logo Masing-Masing */}
                        <div className="flex gap-4">
                            {/* Instagram */}
                            <a href="#" className="w-10 h-10 bg-[#F1F4F4]/50 border border-[#d8c3ac]/30 hover:border-[#C19E70] text-[#a6865c] hover:text-[#C19E70] flex items-center justify-center rounded-xl transition-all group shadow-sm">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 bg-[#F1F4F4]/50 border border-[#d8c3ac]/30 hover:border-[#C19E70] text-[#a6865c] hover:text-[#C19E70] flex items-center justify-center rounded-xl transition-all group shadow-sm">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a href="#" className="w-10 h-10 bg-[#F1F4F4]/50 border border-[#d8c3ac]/30 hover:border-[#C19E70] text-[#a6865c] hover:text-[#C19E70] flex items-center justify-center rounded-xl transition-all group shadow-sm">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links: Services */}
                    <div>
                        <h4 className="text-[#181C1C] font-bold mb-8 text-sm uppercase tracking-widest">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#C19E70] transition-colors opacity-70 hover:opacity-100">OEM Manufacturing</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#C19E70] transition-colors opacity-70 hover:opacity-100">Private Label</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#C19E70] transition-colors opacity-70 hover:opacity-100">Apparel Sourcing</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#C19E70] transition-colors opacity-70 hover:opacity-100">Bulk Wholesale</Link></li>
                        </ul>
                    </div>

                    {/* Links: Perusahaan */}
                    <div>
                        <h4 className="text-[#181C1C] font-bold mb-8 text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#C19E70] transition-colors opacity-70 hover:opacity-100">About Us</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#C19E70] transition-colors opacity-70 hover:opacity-100">Our Services</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#C19E70] transition-colors opacity-70 hover:opacity-100">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Links: Alamat & Kontak */}
                    <div>
                        <h4 className="text-[#181C1C] font-bold mb-8 text-sm uppercase tracking-widest">Info Kontak</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-bold text-[#a6865c] uppercase tracking-widest mb-2">Singapore Office</p>
                                <p className="text-xs text-[#524433] leading-relaxed font-[Inter] opacity-70">
                                    LUMERA GLOBAL PTE. LTD.<br />
                                    68 CIRCULAR ROAD #02-001<br />
                                    SINGAPORE 049422
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-[#a6865c] uppercase tracking-widest mb-2">Email & WhatsApp</p>
                                <p className="text-xs text-[#524433] font-[Inter] opacity-70">
                                    cs@lumeraglobal.com <br />
                                    +65 812 3456 7890
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Status */}
                <div className="pt-8 border-t border-[#d8c3ac]/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
                        <p className="text-[10px] font-bold text-[#524433]/50 uppercase tracking-widest">
                            © {new Date().getFullYear()} Lumera Global. All rights reserved.
                        </p>

                    </div>

                    <div className="flex items-center gap-3 bg-[#F1F4F4] px-4 py-2 rounded-full border border-[#d8c3ac]/30 shadow-sm">

                        <div className="flex gap-6">
                            <Link href="#" className="text-[10px] font-bold text-[#524433]/50 hover:text-[#181C1C] uppercase tracking-widest transition-colors italic">Privacy Policy</Link>
                            <Link href="#" className="text-[10px] font-bold text-[#524433]/50 hover:text-[#181C1C] uppercase tracking-widest transition-colors italic">Terms of Service</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}