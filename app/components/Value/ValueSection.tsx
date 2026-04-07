import React from 'react';

const values = [
    {
        icon: (
            <span className="material-symbols-outlined text-4xl">domain</span>
        ),
        title: 'Based in Singapore SG',
        description:
            'A registered Singapore trading company providing reliable global sourcing and supply chain solutions with full credibility.',
    },
    {
        icon: (
            <span className="material-symbols-outlined text-4xl">public</span>
        ),
        title: 'Asia Factory Network',
        description:
            'Direct access to trusted factories across Vietnam, China, Indonesia, and major manufacturing hubs in Asia.',
    },
    {
        icon: (
            <span className="material-symbols-outlined text-4xl">verified</span>
        ),
        title: '20+ Years Experience',
        description:
            'Strong industry expertise in apparel sourcing, production coordination, and global wholesale supply chain.',
    },
    {
        icon: (
            <span className="material-symbols-outlined text-4xl">schedule</span>
        ),
        title: 'Global Logistics',
        description:
            'End-to-end coordination from the factory production floor to international shipment and final delivery.',
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
                    <div className="text-[10px] font-bold font-[Inter] text-[#C19E70] uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-4">
                        <span className="h-[1px] w-8 bg-[#C19E70]/30"></span>
                        Value Proposition
                        <span className="h-[1px] w-8 bg-[#C19E70]/30 "></span>
                    </div>
                    {/* Judul: Font Serif dengan aksen #C19E70 */}
                    <h2 className="text-[28px] md:text-[42px] font-serif text-[#181C1C] leading-[1.1] tracking-tight max-w-[800px] mx-auto">
                        Trusted Global Apparel Sourcing Partner
                    </h2>

                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-[#d8c3ac]/10 p-10 flex flex-col items-start hover:shadow-[0_30px_60px_rgba(193,158,112,0.1)] transition-all duration-500 rounded-[2rem] relative overflow-hidden"
                        >
                            {/* Decorative number background */}
                            <div className="absolute -top-4 -right-2 text-[100px] font-black font-[Plus_Jakarta_Sans] text-[#F1F4F4]/50 select-none group-hover:text-[#C19E70]/5 transition-colors duration-500">
                                0{index + 1}
                            </div>

                            {/* Icon Container */}
                            <div className="mb-10 w-16 h-16 bg-[#F1F4F4]/50 rounded-2xl flex items-center justify-center text-[#C19E70] group-hover:bg-[#C19E70] group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>

                            {/* Title (Plus Jakarta Sans) */}
                            <h3 className="text-[12px] font-bold font-[Plus_Jakarta_Sans] text-[#181C1C] uppercase tracking-[0.15em] mb-4 group-hover:text-[#a6865c] transition-colors">
                                {item.title}
                            </h3>

                            {/* Description (Inter) */}
                            <p className="text-[14px] font-[Inter] text-[#524433] leading-[1.8] opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.description}
                            </p>

                            {/* Subtle line at bottom */}
                            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C19E70] transition-all duration-500 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}