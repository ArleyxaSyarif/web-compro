import React from 'react';

const values = [
    {
        icon: (
            <span className="material-symbols-outlined text-4xl">inventory_2</span>
        ),
        title: 'Koleksi Terlengkap',
        description:
            'Menyediakan ribuan model pakaian anak dengan desain terbaru dan up-to-date yang siap memenuhi kebutuhan etalase toko Anda.',
    },
    {
        icon: (
            <span className="material-symbols-outlined text-4xl">public</span>
        ),
        title: 'Pengiriman Nasional',
        description:
            'Melayani pengiriman partai besar ke seluruh pelosok Nusantara dengan pilihan ekspedisi cargo termurah dan terpercaya.',
    },
    {
        icon: (
            <span className="material-symbols-outlined text-4xl">payments</span>
        ),
        title: 'Harga Tangan Pertama',
        description:
            'Jaminan harga grosir termurah langsung dari konveksi. Memberikan margin keuntungan yang maksimal untuk para mitra bisnis kami.',
    },
    {
        icon: (
            <span className="material-symbols-outlined text-4xl">support_agent</span>
        ),
        title: 'Layanan Cepat Tanggap',
        description:
            'Tim customer support yang profesional siap membantu proses pemesanan, pengecekan stok, hingga tracking pengiriman Anda.',
    },
];

export default function ValueSection() {
    return (
        <section className="w-full bg-[#F7FAF9] py-24 lg:py-32 relative overflow-hidden">

            {/* GRID BACKGROUND (Sangat Halus) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#181C1C 1px, transparent 1px), linear-gradient(90deg, #181C1C 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="mx-auto px-6 lg:px-12 w-full max-w-[1400px] relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="text-[10px] font-bold font-[Inter] text-[#ffaa00] uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-4">
                        <span className="h-[1px] w-8 bg-[#ffaa00]/30"></span>
                        Mengapa Memilih Kami
                        <span className="h-[1px] w-8 bg-[#FFAA00]/30 "></span>
                    </div>
                    {/* Judul: Warna gelap dengan aksen #ffaa00 pada "Pakaian Anak" */}
                    <h2 className="text-[36px] md:text-[52px] font-[Plus_Jakarta_Sans] font-black text-[#181C1C] leading-[1.1] tracking-tight max-w-[800px] mx-auto">
                        Mitra Terbaik Bisnis <span className="text-[#FFAA00]">Pakaian Anak</span> Anda
                    </h2>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-[#d8c3ac]/10 p-10 flex flex-col items-start hover:shadow-[0_30px_60px_rgba(130,85,0,0.06)] transition-all duration-500 rounded-[2rem] relative overflow-hidden"
                        >
                            {/* Decorative number background */}
                            <div className="absolute -top-4 -right-2 text-[100px] font-black font-[Plus_Jakarta_Sans] text-[#F1F4F4]/50 select-none group-hover:text-[#FFAA00]/5 transition-colors duration-500">
                                0{index + 1}
                            </div>

                            {/* Icon Container */}
                            <div className="mb-10 w-16 h-16 bg-[#F1F4F4]/50 rounded-2xl flex items-center justify-center text-[#FFAA00] group-hover:bg-[#FFAA00] group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>

                            {/* Title (Plus Jakarta Sans) */}
                            <h3 className="text-[12px] font-bold font-[Plus_Jakarta_Sans] text-[#181C1C] uppercase tracking-[0.15em] mb-4 group-hover:text-[#825500] transition-colors">
                                {item.title}
                            </h3>

                            {/* Description (Inter) */}
                            <p className="text-[14px] font-[Inter] text-[#524433] leading-[1.8] opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.description}
                            </p>

                            {/* Subtle line at bottom */}
                            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#FFAA00] transition-all duration-500 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

