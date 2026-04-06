import React from 'react';
/* Import next/image bila menggunakan <Image /> nantinya */
// import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="w-full bg-white pt-16 pb-24 lg:pt-12 lg:pb-32 overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-[1400px]">

                {/* Layout perbandingan kiri (teks) dan kanan (gambar) */}
                <div className="flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-20">

                    {/* ======================= */}
                    {/* 1. KOLOM KIRI (TEKS)    */}
                    {/* ======================= */}
                    <div className="w-full xl:w-[55%] flex flex-col items-start text-left xl:pr-10">

                        {/* Top Subtitle */}
                        <div className="text-[10px] sm:text-[11px] font-bold font-sans text-[#C19E70] uppercase tracking-[0.2em] mb-5">
                            Pusat Grosir Baju Anak Terlengkap
                        </div>

                        {/* Main Headline (Judul Besar) */}
                        <h1 className="text-[44px] sm:text-[56px] lg:text-[72px] font-serif text-gray-900 leading-[1.05] mb-6 tracking-tight max-w-[620px]">
                            Tumbuh Berkembang <br />
                            <span className="italic font-serif text-[#C19E70]">Lebih Cepat</span> <br />
                            Bersama Lamonte.
                        </h1>

                        <p className="text-gray-500 font-sans text-[15px] sm:text-[16px] leading-[1.7] max-w-[540px] mb-10">
                            Lamonte adalah pusat grosir pakaian anak termurah dan tangan pertama di Indonesia. Kami hadir untuk membantu Anda memulai dan membesarkan bisnis fashion anak dengan produk berkualitas, tren terbaru, dan keuntungan maksimal.
                        </p>
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto mt-2">
                            <button className="w-full sm:w-auto bg-[#C19E70] text-white px-8 py-[15px] text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#a6865c] transition-colors">
                                Daftar Mitra
                            </button>
                            <button className="w-full sm:w-auto bg-white text-[#6B7280] border border-gray-200 px-8 py-[15px] text-[11px] font-bold uppercase tracking-[0.15em] hover:border-gray-400 hover:text-gray-900 transition-colors">
                                Lihat Katalog
                            </button>
                        </div>

                        {/* Bottom Features List (3 Poin dengan titik Emas) */}
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[9px] sm:text-[10px] font-bold font-sans text-[#9CA3AF] uppercase tracking-[0.15em]">
                            <div className="flex items-center gap-2.5">
                                <div className="w-[5px] h-[5px] sm:w-1.5 sm:h-1.5 rounded-full bg-[#C19E70]"></div>
                                Harga Tangan Pertama
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-[5px] h-[5px] sm:w-1.5 sm:h-1.5 rounded-full bg-[#C19E70]"></div>
                                Kualitas Premium
                            </div>
                            <div className="flex items-center gap-2.5">
                                <div className="w-[5px] h-[5px] sm:w-1.5 sm:h-1.5 rounded-full bg-[#C19E70]"></div>
                                100% Terpercaya
                            </div>
                        </div>

                    </div>

                    {/* =============================== */}
                    {/* 2. KOLOM KANAN (GAMBAR & BOX)   */}
                    {/* =============================== */}
                    <div className="w-full xl:w-[45%] relative mt-12 xl:mt-0">
                        {/* Image Container dengan rasio kotak (aspect-square) */}
                        <div className="relative w-full aspect-square max-w-[620px] mx-auto xl:ml-auto xl:mr-0 bg-gray-50 shadow-sm border border-gray-100">

                            <img
                                src="/img/img1.png"
                                alt="Lumera Global"
                                className="w-full h-full object-cover object-center"
                            />

                            {/* Floating Experience Box (Box melayang di pojok kiri bawah) */}
                            {/* Pengaturan absolute ini khusus untuk menyerupai tata letak desain aslinya */}
                            {/* Floating Experience Box (Box melayang di pojok kiri bawah) */}
                            <div className="absolute -left-4 sm:-left-8 lg:-left-16 -bottom-6 sm:bottom-4 lg:bottom-10 bg-white p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] z-10 w-[190px] sm:w-[220px]">
                                {/* 1500+ */}
                                <div className="text-[40px] sm:text-[46px] font-serif text-[#C19E70] leading-none mb-3 sm:mb-4 flex items-start">
                                    1500<span className="text-[30px] sm:text-[34px] font-sans font-light relative top-[-4px] ml-1">+</span>
                                </div>
                                {/* Mitra & Reseller */}
                                <div className="text-[9px] sm:text-[10px] font-bold font-sans text-gray-400 uppercase tracking-[0.2em] leading-[1.6]">
                                    Mitra & Reseller <br /> Telah Bergabung
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
