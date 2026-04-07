import React from 'react';

export default function Partnerships() {
    // Array data mitra/partner
    const partners = [
        { id: 1, name: 'Partner 1', src: '/partner/bnsp.png' },
        { id: 2, name: 'Partner 2', src: '/partner/kampungbudaya.png' },
        { id: 3, name: 'Partner 3', src: '/partner/lhk.png' },
        { id: 4, name: 'Partner 4', src: '/partner/sttif.png' },
        { id: 5, name: 'Partner 5', src: '/partner/tomaloa.png' },
        { id: 6, name: 'Partner 6', src: '/partner/travelapak.png' },
    ];

    // Menggandakan array agar efek looping tidak pernah putus
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section id="clients" className="w-full bg-white py-16 lg:py-24 overflow-hidden">


            {/* Definisi animasi CSS untuk Slider (Marquee) */}
            <style>{`
                @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                animation: marquee 35s linear infinite;
                }
                .animate-marquee:hover {
                animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    {/* Judul menggunakan warna #ffaa00 dengan spasi antar huruf yang lebar */}
                    <h2 className="font-[Inter] text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#c9a96e] font-bold flex items-center justify-center gap-4">
                        <span className="h-[1px] w-8 bg-[#c9a96e]/30 hidden md:block"></span>
                        Trusted by Our Partners
                        <span className="h-[1px] w-8 bg-[#c9a96e]/30 hidden md:block"></span>
                    </h2>
                </div>

                {/* Container Slider dengan efek pudar (fade) di sisi kiri & kanan */}
                <div
                    className="relative flex overflow-hidden"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                    }}
                >
                    {/* Track Slider */}
                    <div className="flex w-max animate-marquee items-center gap-20 md:gap-32 opacity-50 hover:opacity-100 transition-opacity duration-500">
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.id}-${index}`}
                                className="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex-shrink-0"
                            >
                                <img
                                    alt={partner.name}
                                    src={partner.src}
                                    className="h-7 md:h-9 w-auto object-contain hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

