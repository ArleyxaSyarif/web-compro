import React from 'react';

export default function HeroSection() {
    return (
        // Menambahkan pt-40 dan lg:pt-52 agar konten tidak tertutup Navbar Fixed
        <section className="relative overflow-hidden px-6 lg:px-4 pt-40 pb-24 lg:pt-32 lg:pb-32 flex flex-col items-center text-center bg-[#F7FAF9]">

            {/* GRID BACKGROUND (Sangat Halus) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#181C1C 1px, transparent 1px), linear-gradient(90deg, #181C1C 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(#181C1C 1px, transparent 1px), linear-gradient(90deg, #181C1C 1px, transparent 1px)`,
                    backgroundSize: '8px 8px'
                }}
            ></div>

            {/* RADIAL GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#FFAA00]/5 to-transparent pointer-events-none -z-10"></div>

            <div className="relative z-10 max-w-6xl mx-auto space-y-8">

                {/* Top Label */}
                <span className="inline-block font-[Inter] text-xs uppercase tracking-[0.4em] text-[#FFAA00] font-bold">
                    <span className="h-[1px] w-8 bg-[#FFAA00] inline-block align-middle mr-3"></span>
                    Pusat Grosir Baju Anak Terlengkap
                </span>

                {/* Main Headline */}
                <h1 className="font-[Plus_Jakarta_Sans] text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1] text-[#181C1C]">
                    Tumbuh Berkembang<br />
                    <span className="text-[#FFAA00] italic">Lebih Cepat </span>
                    <span className="text-[#FFAA00]">Bersama Lamonte.</span>
                </h1>

                {/* Description */}
                <p className="font-[Inter] text-lg md:text-xl text-[#524433] max-w-2xl mx-auto leading-relaxed opacity-80">
                    Lamonte adalah pusat grosir pakaian anak termurah dan tangan pertama di Indonesia. Kami hadir untuk membantu Anda memulai dan membesarkan bisnis fashion anak dengan produk berkualitas.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                    <button className="bg-[#ffaa00] text-white px-10 py-5 rounded-md font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-[#825500]/20 active:scale-95 font-[Plus_Jakarta_Sans]">
                        Daftar Mitra Sekarang
                    </button>
                    <button className="bg-transparent border-2 border-[#181C1C] text-[#181C1C] px-10 py-5 rounded-md font-bold text-lg hover:bg-[#181C1C] hover:text-[#F7FAF9] transition-all active:scale-95 font-[Plus_Jakarta_Sans]">
                        Lihat Katalog
                    </button>
                </div>
            </div>

            {/* Bottom Trust Badges */}
            <div className="relative z-10 mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[10px] sm:text-xs font-[Inter] font-bold text-[#524433] uppercase tracking-[0.2em] opacity-60">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFAA00]"></div>
                    Harga Tangan Pertama
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFAA00]"></div>
                    Kualitas Premium
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFAA00]"></div>
                    100% Terpercaya
                </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative z-10 mt-24 w-full max-w-[1400px] mx-auto group">
                {/* Glow blur melayang */}
                <div className="absolute inset-0 bg-[#FFAA00]/10 rounded-full blur-[140px] -z-10 transform -translate-y-1/2 scale-110"></div>

                <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.1)] bg-white p-2 lg:p-4 border border-[#d8c3ac]/20">
                    <div className="w-full h-full rounded-xl border border-[#d8c3ac]/10 bg-[#F1F4F4] overflow-hidden relative">

                        {/* Glassmorphism Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col items-center gap-3 scale-90 lg:scale-100">
                                <div className="text-[60px] lg:text-[100px] font-[Plus_Jakarta_Sans] font-black text-[#FFAA00] leading-none tracking-tighter">
                                    1500<span className="text-4xl lg:text-6xl">+</span>
                                </div>
                                <div className="text-[10px] lg:text-xs font-[Inter] font-bold text-white uppercase tracking-[0.4em] whitespace-nowrap">
                                    Mitra Terverifikasi
                                </div>
                            </div>
                        </div>

                        {/* Background Image */}
                        <img
                            src="/img/lamonte.png"
                            alt="Lamonte Baju Anak"
                            className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}

