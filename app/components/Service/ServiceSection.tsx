import React from 'react';

const services = [
    {
        number: '01.',
        title: 'Grosir & Partai Besar',
        description:
            'Pembelian serian, lusinan, hingga partai besar (bal-balan) dengan jaminan harga tangan pertama langsung dari konveksi.',
        features: ['Harga Skala Pabrik', 'Pilihan Cargo Termurah'],
        icon: 'inventory_2',
        gradient: true,
    },
    {
        number: '02.',
        title: 'Paket Usaha Pemula',
        description:
            'Solusi praktis bagi Anda yang baru ingin membuka toko. Dapatkan paket bundling berisi kurasi produk-produk best seller yang siap jual.',
        features: ['Modal Lebih Terjangkau', 'Produk Cepat Laku (Fast Moving)'],
        icon: 'auto_awesome',
        gradient: false,
    },
    {
        number: '03.',
        title: 'Kemitraan & Distributor',
        description:
            'Kuasai pasar fashion anak di kota Anda dengan bergabung menjadi agen resmi atau distributor kami untuk mendapatkan benefit eksklusif.',
        features: ['Margin Keuntungan Besar', 'Support Materi Promosi'],
        icon: 'handshake',
        gradient: true,
    },
];

const featureIcons: Record<string, string> = {
    'Harga Skala Pabrik': 'verified',
    'Pilihan Cargo Termurah': 'local_shipping',
    'Modal Lebih Terjangkau': 'payments',
    'Produk Cepat Laku (Fast Moving)': 'trending_up',
    'Margin Keuntungan Besar': 'account_balance_wallet',
    'Support Materi Promosi': 'campaign',
};

export default function ServiceSection() {
    return (
        <section className="w-full bg-[#F7FAF9] py-24 lg:py-32 relative overflow-hidden">

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
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#ffaa00]/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="mx-auto px-6 lg:px-12 w-full max-w-screen-2xl relative z-10">

                {/* ===== HEADER ===== */}
                <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-[#FFAA00]/10 text-[#825500] font-[Inter] font-bold tracking-[0.2em] text-[10px] uppercase mb-6 border-l-2 border-[#FFAA00]">
                            &nbsp; Layanan Utama Kami
                        </span>
                        <h2 className="font-[Plus_Jakarta_Sans] text-5xl md:text-7xl font-extrabold tracking-tighter text-[#181C1C] leading-[1.1] mb-8">
                            Solusi Terpadu untuk <br />
                            <span className="text-[#FFAA00]">Bisnis Anda.</span>
                        </h2>
                        <p className="text-[#524433] text-lg md:text-xl leading-relaxed max-w-2xl font-[Inter] opacity-80">
                            Kami menyediakan ekosistem supply chain yang lengkap dan terpercaya untuk membantu UMKM, pemilik toko ritel, hingga agen berkembang pesat di industri fashion anak.
                        </p>
                    </div>
                    <div className="hidden lg:block w-32 h-[1px] bg-[#d8c3ac]/30 mb-8 font-mono text-[10px] text-[#d8c3ac] tracking-widest">
                        SERVICE_CORE_V1
                    </div>
                </header>

                {/* ===== 3 SERVICE CARDS ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <article
                            key={index}
                            className={`group p-10 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-2 ${index === 1
                                ? 'bg-white shadow-[0px_32px_64px_rgba(24,28,28,0.06)] border border-[#d8c3ac]/20'
                                : 'bg-white/40 backdrop-blur-sm border border-[#d8c3ac]/10 hover:bg-white/60 shadow-sm'
                                }`}
                        >
                            <div className="flex flex-col h-full relative z-10">
                                {/* Top: Number + Icon */}
                                <div className="mb-12 flex justify-between items-start">
                                    <span className="font-[Plus_Jakarta_Sans] text-5xl font-black text-[#d8c3ac]/20 tracking-tighter group-hover:text-[#FFAA00]/20 transition-colors">
                                        {service.number}
                                    </span>
                                    <div
                                        className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:rotate-[10deg] ${service.gradient
                                            ? 'bg-gradient-to-br from-[#825500] to-[#FFAA00]'
                                            : 'bg-[#181C1C]'
                                            }`}
                                    >
                                        <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-[Plus_Jakarta_Sans] text-2xl font-bold text-[#181C1C] mb-6 leading-tight group-hover:text-[#825500] transition-colors">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[#524433] mb-10 leading-relaxed font-[Inter] opacity-80">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="mt-auto pt-8 border-t border-[#d8c3ac]/20">
                                    <ul className="space-y-4">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[#FFAA00] text-xl">
                                                    {featureIcons[feature] || 'check_circle'}
                                                </span>
                                                <span className="font-[Inter] text-sm font-bold text-[#181C1C]/70">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* ===== CTA BANNER ===== */}
                <section className="mt-32 p-12 bg-[#181C1C] rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFAA00]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="max-w-xl relative z-10">
                        <h4 className="font-[Plus_Jakarta_Sans] text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
                            Siap Memulai Perjalanan <br /> Bisnis Anda?
                        </h4>
                        <p className="text-[#E0E3E2]/60 font-[Inter] text-lg">
                            Konsultasikan kebutuhan supply chain fashion anak Anda bersama tim ahli kami secara gratis.
                        </p>
                    </div>
                    <button className="relative z-10 bg-[#FFAA00] text-[#181C1C] px-10 py-5 rounded-xl font-[Plus_Jakarta_Sans] font-black transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-[#FFAA00]/20 uppercase tracking-widest text-sm">
                        Hubungi Admin Sekarang
                    </button>
                </section>

            </div>
        </section>
    );
}
