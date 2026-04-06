import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white text-[#181C1C] pt-24 pb-12 border-t border-[#d8c3ac]/20 font-sans relative overflow-hidden">

            {/* Subtle Ambient Glow (Light Mode) */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffaa00]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">

                    {/* Brand & Description (Kolom 1 & 2) */}
                    <div className="lg:col-span-2 flex flex-col items-start justify-start">
                        {/* Logo Lamonte (Image Version) */}
                        <div className="mb-6 -ml-1"> {/* Menambahkan -ml-1 untuk kompensasi whitespace kecil pada gambar */}
                            <img
                                src="/img/logo.png"
                                alt="Lamonte Logo"
                                className="h-12 md:h-14 w-auto object-contain object-left"
                            />
                        </div>

                        <p className="text-[#524433] text-sm leading-relaxed max-w-sm mb-8 opacity-70 font-[Inter]">
                            Pusat grosir pakaian anak termurah dan tangan pertama di Indonesia. Solusi terpercaya untuk stok toko dan paket usaha fashion anak dengan kualitas premium.
                        </p>

                        {/* Social Media Buttons */}
                        <div className="flex gap-4">
                            {['IG', 'FB', 'WA'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 bg-[#F1F4F4] border border-[#d8c3ac]/30 hover:border-[#ffaa00] text-[#825500] hover:text-[#ffaa00] flex items-center justify-center rounded-lg text-[10px] font-bold tracking-widest transition-all"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links: Layanan Kami */}
                    <div>
                        <h4 className="text-[#181C1C] font-bold mb-8 text-sm uppercase tracking-widest">Layanan Kami</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#825500] transition-colors opacity-70 hover:opacity-100">Grosir & Partai Besar</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#825500] transition-colors opacity-70 hover:opacity-100">Paket Usaha Pemula</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#825500] transition-colors opacity-70 hover:opacity-100">Kemitraan Agen</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#825500] transition-colors opacity-70 hover:opacity-100">Katalog Produk</Link></li>
                        </ul>
                    </div>

                    {/* Links: Perusahaan */}
                    <div>
                        <h4 className="text-[#181C1C] font-bold mb-8 text-sm uppercase tracking-widest">Perusahaan</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#825500] transition-colors opacity-70 hover:opacity-100">Tentang Kami</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#825500] transition-colors opacity-70 hover:opacity-100">Cara Pemesanan</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#825500] transition-colors opacity-70 hover:opacity-100">Testimoni Mitra</Link></li>
                            <li><Link href="#" className="text-sm text-[#524433] hover:text-[#825500] transition-colors opacity-70 hover:opacity-100">Hubungi Kami</Link></li>
                        </ul>
                    </div>

                    {/* Links: Alamat & Kontak */}
                    <div>
                        <h4 className="text-[#181C1C] font-bold mb-8 text-sm uppercase tracking-widest">Info Kontak</h4>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-2">Gudang Pusat</p>
                                <p className="text-xs text-[#524433] leading-relaxed font-[Inter] opacity-70">
                                    Jl. Pusat Grosir No. 88, Jakarta Pusat,<br />DKI Jakarta 10230
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-2">Email & WhatsApp</p>
                                <p className="text-xs text-[#524433] font-[Inter] opacity-70">
                                    cs@lamonte.id <br />
                                    +62 812 3456 7890
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Status */}
                <div className="pt-8 border-t border-[#d8c3ac]/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
                        <p className="text-[10px] font-bold text-[#524433]/50 uppercase tracking-widest">
                            © {new Date().getFullYear()} Lamonte.id. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-[10px] font-bold text-[#524433]/50 hover:text-[#181C1C] uppercase tracking-widest transition-colors italic">Kebijakan Privasi</Link>
                            <Link href="#" className="text-[10px] font-bold text-[#524433]/50 hover:text-[#181C1C] uppercase tracking-widest transition-colors italic">Syarat & Ketentuan</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-[#F1F4F4] px-4 py-2 rounded-full border border-[#d8c3ac]/30 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffaa00] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffaa00]"></span>
                        </span>
                        <span className="text-[10px] text-[#524433] font-bold uppercase tracking-widest">System Operational</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
