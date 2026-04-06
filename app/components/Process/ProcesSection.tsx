import React from 'react';

const steps = [
    {
        id: 'DISCOVERY',
        number: '01',
        title: 'Pendaftaran',
        description: 'Hubungi admin kami untuk mendaftar sebagai mitra agen atau reseller.',
        icon: 'how_to_reg'
    },
    {
        id: 'CATALOG',
        number: '02',
        title: 'Pilih Produk',
        description: 'Akses katalog terbaru kami dan pilih model baju sesuai kebutuhan pasar.',
        icon: 'shop'
    },
    {
        id: 'ORDERING',
        number: '03',
        title: 'Pemesanan',
        description: 'Tentukan jumlah pesanan untuk partai besar, seri, atau paket usaha.',
        icon: 'shopping_cart_checkout'
    },
    {
        id: 'PAYMENT',
        number: '04',
        title: 'Pembayaran',
        description: 'Lakukan pembayaran melalui rekening resmi kami yang aman dan terverifikasi.',
        icon: 'payments'
    },
    {
        id: 'QUALITY',
        number: '05',
        title: 'QC & Packing',
        description: 'Tim kami melakukan pengecekan kualitas (QC) ketat dan pengemasan barang.',
        icon: 'inventory_2'
    },
    {
        id: 'LOGISTICS',
        number: '06',
        title: 'Pengiriman',
        description: 'Pesanan dikirim ke seluruh Indonesia dengan ekspedisi cargo termurah.',
        icon: 'local_shipping'
    },
    {
        id: 'SUCCESS',
        number: '07',
        title: 'Siap Jualan',
        description: 'Barang tiba di toko Anda dan siap dijual untuk meraup keuntungan maksimal.',
        icon: 'storefront'
    },
];

export default function ProcessSection() {
    return (
        <section className="bg-[#F7FAF9] py-24 lg:py-32 w-full overflow-hidden relative">
            {/* CSS ANIMATIONS & GRID STYLES */}
            <style>{`
                .blueprint-grid {
                    background-size: 40px 40px;
                    background-image: linear-gradient(to right, rgba(133, 116, 96, 0.08) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(133, 116, 96, 0.08) 1px, transparent 1px);
                }
                .blueprint-grid-fine {
                    background-size: 8px 8px;
                    background-image: linear-gradient(to right, rgba(133, 116, 96, 0.03) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(133, 116, 96, 0.03) 1px, transparent 1px);
                }
                @keyframes moveDown { 
                    from { top: -100px; } 
                    to { top: 100%; } 
                }
            `}</style>

            <div className="max-w-[1920px] mx-auto px-8 lg:px-24 relative">



                {/* Header Section */}
                <header className="mb-32 relative">
                    <div className="absolute -top-12 left-0 text-[12vw] font-black text-[#181C1C]/[0.03] select-none pointer-events-none tracking-tight leading-none uppercase">
                        Lamonte
                    </div>
                    <p className="text-[#FFAA00] font-[Inter] text-xs font-bold tracking-[0.4em] uppercase mb-6 flex items-center">
                        <span className="h-[1px] w-8 bg-[#FFAA00] mr-4"></span>
                        Alur Pembayaran
                    </p>
                    <div className="relative inline-block">
                        <h2 className="font-[Plus_Jakarta_Sans] text-5xl md:text-8xl tracking-tighter text-[#181C1C] max-w-5xl leading-[0.85] relative z-10">
                            <span className="font-light block mb-2">  Langkah Mudah Belanja</span>
                            <span className="font-black text-[#FFAA00] italic"> di Lamonte.</span>
                        </h2>
                        <div className="absolute -bottom-4 -left-8 w-[110%] h-4 bg-[#FFAA00] z-0 opacity-40"></div>
                    </div>


                </header>

                {/* Timeline Grid Background */}
                <div className="relative blueprint-grid blueprint-grid-fine -mx-8 lg:-mx-16 px-8 lg:px-16 py-24 rounded-[3rem] border border-[#d8c3ac]/10">

                    {/* Layered Background Text */}
                    <div className="absolute bottom-1/4 left-0 text-[18vw] font-[Plus_Jakarta_Sans] font-black text-[#FFAA00]/[0.04] select-none pointer-events-none -translate-x-12">STRUCTURE</div>

                    {/* Timeline Line Animation */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-b from-[#FFAA00]/5 via-[#FFAA00] to-[#FFAA00]/5 opacity-20"></div>
                        <div className="absolute inset-x-0 h-24 bg-[#FFAA00] animate-[moveDown_10s_linear_infinite]"></div>
                    </div>

                    <div className="space-y-48 md:space-y-24 relative z-10">
                        {steps.map((step, index) => {
                            const isEven = index % 2 !== 0;
                            const isLast = index === steps.length - 1;

                            return (
                                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">

                                    {/* BLOK KIRI */}
                                    <div className={`w-full md:w-[42%] ${isEven ? 'order-3 md:order-1 hidden md:block' : 'text-center md:text-right order-2 md:order-1 mt-8 md:mt-0'}`}>
                                        {!isEven && (
                                            <div className="max-w-2xl md:ml-auto">
                                                <div className="inline-block p-1 border-b border-[#FFAA00]/40 mb-2">
                                                    <span className="text-[#FFAA00] font-mono text-sm tracking-widest uppercase">
                                                        STP_{step.number} // {step.id}
                                                    </span>
                                                </div>
                                                <h3 className="font-[Plus_Jakarta_Sans] text-3xl md:text-4xl font-bold text-[#181C1C] mb-4 group-hover:text-[#FFAA00] transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                                <p className="text-[#524433] font-[Inter] leading-relaxed text-lg italic opacity-80">
                                                    {step.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* BLOK TENGAH (Ikon) */}
                                    <div className="z-10 order-1 md:order-2 flex items-center justify-center">
                                        <div className="relative">
                                            <div className={`absolute -inset-4 border ${isEven ? 'border-dashed border-[#FFAA00]/40' : 'border-[#FFAA00]/20'} rounded-full animate-spin`} style={{ animationDuration: '20s' }}></div>
                                            <div className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl ring-8 ring-[#F7FAF9] ${isEven ? 'border-4 border-[#FFAA00] bg-[#F7FAF9] text-[#FFAA00]' : 'bg-[#FFAA00] text-white'}`}>
                                                <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BLOK KANAN */}
                                    <div className={`w-full md:w-[42%] ${!isEven ? 'order-3 hidden md:block' : 'text-center md:text-left order-2 md:order-3 mt-8 md:mt-0'}`}>
                                        {isEven && (
                                            <div className="max-w-2xl">
                                                <div className="inline-block p-1 border-b border-[#FFAA00]/40 mb-2">
                                                    <span className="text-[#FFAA00] font-mono text-sm tracking-widest uppercase">
                                                        STP_{step.number} // {step.id}
                                                    </span>
                                                </div>
                                                <h3 className="font-[Plus_Jakarta_Sans] text-3xl md:text-4xl font-bold text-[#181C1C] mb-4 group-hover:text-[#FFAA00] transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                                <p className="text-[#524433] font-[Inter] leading-relaxed text-lg italic opacity-80">
                                                    {step.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* BOTTOM BANNER */}
                <section className="mt-48 relative z-20">
                    <div className="bg-[#181C1C] p-16 rounded-3xl flex flex-col md:flex-row items-center justify-between overflow-hidden relative border border-white/5 shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FFAA00]/10 to-transparent pointer-events-none"></div>
                        <div className="z-10">
                            <h2 className="text-white font-[Plus_Jakarta_Sans] text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                                Siap Menginisiasi <br />Bisnis Anda?
                            </h2>
                            <p className="text-white/60 text-lg max-w-md mb-8 font-[Inter]">
                                Bergabunglah dengan jaringan distribusi Lamonte dan rasakan proses bisnis yang terstruktur serta menguntungkan.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-8 py-4 bg-[#FFAA00] text-[#181C1C] rounded-md font-bold tracking-tight hover:brightness-110 transition-all shadow-lg shadow-[#FFAA00]/20">
                                    Daftar Sekarang
                                </button>
                                <button className="px-8 py-4 border border-white/20 text-white rounded-md font-bold tracking-tight hover:bg-white/10 transition-colors">
                                    Hubungi Admin
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block absolute -right-20 top-0 h-full w-1/3 opacity-20 pointer-events-none">
                            <span className="material-symbols-outlined text-[300px] text-[#FFAA00]">Struktur</span>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    );
}

