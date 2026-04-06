import React from 'react';


export default function WhyChooseSection() {
    
    return (
        
        <section className="bg-[#F7FAF9] py-24 lg:py-32">
            <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* ===== KOLOM KIRI: Sticky Headline ===== */}
                    <div className="lg:col-span-5 lg:sticky lg:top-40">
                        <span className="font-[Inter] text-xs tracking-[0.2em] text-[#FFAA00] uppercase mb-6 block font-bold">
                            Keunggulan Lamonte
                        </span>
                        <h2 className="font-[Plus_Jakarta_Sans] text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.95] text-[#181C1C] mb-8">
                            Mengapa Ribuan Mitra Memilih Kami
                        </h2>
                        <p className="text-[#524433] text-lg max-w-md leading-relaxed mb-12">
                            Kami hadir sebagai mitra terpercaya dalam bisnis fashion anak. Pendekatan kami mengutamakan kualitas, harga terbaik, dan layanan yang konsisten untuk setiap mitra.
                        </p>
                        <div className="flex flex-col gap-6">
                            <div className="group flex items-center gap-4 cursor-pointer">
                                <div className="h-[1px] w-12 bg-[#d8c3ac] group-hover:w-20 group-hover:bg-[#FFAA00] transition-all duration-500"></div>
                                <span className="font-[Plus_Jakarta_Sans] text-sm font-bold tracking-widest uppercase text-[#181C1C] group-hover:text-[#FFAA00] transition-colors">
                                    Lihat Katalog Kami
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* ===== KOLOM KANAN: Offset Grid Cards ===== */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Column 1 */}
                            <div className="flex flex-col gap-8 md:mt-0">

                                {/* Card 1 */}
                                <div className="bg-[#F1F4F4] p-10 flex flex-col justify-between min-h-[420px] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 text-[#FFAA00]/10 font-[Plus_Jakarta_Sans] text-9xl font-black select-none pointer-events-none">01</div>
                                    <div className="relative z-10">
                                        <span className="material-symbols-outlined text-[#FFAA00] text-4xl mb-6 block">storefront</span>
                                        <h3 className="font-[Plus_Jakarta_Sans] text-2xl font-bold mb-4 text-[#181C1C]">Supplier Tangan Pertama</h3>
                                        <p className="text-[#524433] leading-relaxed">Mendapatkan harga pabrik termurah tanpa perantara, memberikan margin keuntungan yang jauh lebih besar untuk Anda jual kembali.</p>
                                    </div>
                                    <div className="pt-8 relative z-10">
                                        <div className="h-1 w-12 bg-[#FFAA00] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                    </div>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-[#E0E3E2] p-10 flex flex-col justify-between min-h-[340px] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 text-[#FFAA00]/10 font-[Plus_Jakarta_Sans] text-9xl font-black select-none pointer-events-none">02</div>
                                    <div className="relative z-10">
                                        <span className="material-symbols-outlined text-[#FFAA00] text-4xl mb-6 block">diamond</span>
                                        <h3 className="font-[Plus_Jakarta_Sans] text-2xl font-bold mb-4 text-[#181C1C]">Kualitas Premium & Trendy</h3>
                                        <p className="text-[#524433] leading-relaxed">Menggunakan material pilihan yang aman dan nyaman untuk anak, dipadukan dengan desain yang selalu up-to-date setiap minggunya.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 (Offset) */}
                            <div className="flex flex-col gap-8 md:mt-24">

                                {/* Card 3 */}
                                <div className="bg-[#F1F4F4] p-10 flex flex-col justify-between min-h-[380px] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 text-[#FFAA00]/10 font-[Plus_Jakarta_Sans] text-9xl font-black select-none pointer-events-none">03</div>
                                    <div className="relative z-10">
                                        <span className="material-symbols-outlined text-[#FFAA00] text-4xl mb-6 block">verified</span>
                                        <h3 className="font-[Plus_Jakarta_Sans] text-2xl font-bold mb-4 text-[#181C1C]">Terpercaya & Berpengalaman</h3>
                                        <p className="text-[#524433] leading-relaxed">Telah dipercaya oleh ribuan mitra di seluruh Indonesia dengan rekam jejak pengiriman jutaan pcs pakaian secara aman dan tepat waktu.</p>
                                    </div>
                                    <div className="pt-8 relative z-10">
                                        <div className="h-1 w-12 bg-[#FFAA00] group-hover:w-full transition-all duration-700 ease-in-out"></div>
                                    </div>
                                </div>

                                {/* Card 4: Dark card dengan gambar */}
                                <div className="bg-[#181C1C] p-10 flex flex-col justify-between min-h-[460px] relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-8 text-[#FFAA00]/10 font-[Plus_Jakarta_Sans] text-9xl font-black select-none pointer-events-none">04</div>
                                    <div className="relative z-10">
                                        <span className="material-symbols-outlined text-[#FFAA00] text-4xl mb-6 block">local_shipping</span>
                                        <h3 className="font-[Plus_Jakarta_Sans] text-2xl font-bold text-white mb-4">Pengiriman Se-Indonesia</h3>
                                        <p className="text-[#E0E3E2] leading-relaxed">Melayani pengiriman partai besar ke seluruh pelosok Nusantara dengan pilihan ekspedisi cargo termurah dan terpercaya.</p>
                                    </div>
                                    <div className="mt-8 relative z-10">
                                        <img
                                            src="/img/img2.png"
                                            alt="Pengiriman Lamonte"
                                            className="w-full h-32 object-cover rounded-lg opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
