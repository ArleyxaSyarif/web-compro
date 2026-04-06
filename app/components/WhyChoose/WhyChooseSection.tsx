import React from 'react';

const reasons = [
    {
        title: 'Singapore-Based Hub',
        description:
            'Operating from Singapore provides a trusted international trading structure for global buyers and partners.',
    },
    {
        title: 'Direct Factory Network',
        description:
            'Access to verified manufacturing partners across Asia, enabling competitive pricing and flexible production.',
    },
    {
        title: 'Scalable Production',
        description:
            'From small boutique batch orders to large-scale mass manufacturing, we adapt to your business needs.',
    },
];

export default function WhyChooseSection() {
    return (
        <section className="w-full bg-[#FAFAFA] py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-[1400px]">

                <div className="flex flex-col xl:flex-row items-start justify-between gap-16 xl:gap-24">

                    {/* ===== KOLOM KIRI (TEKS) ===== */}
                    <div className="w-full xl:w-1/2 flex flex-col items-start xl:pr-8">

                        {/* Subtitle */}
                        <div className="text-[10px] sm:text-[11px] font-bold font-sans text-[#C19E70] uppercase tracking-[0.25em] mb-5">
                            Value Proposition
                        </div>

                        {/* Heading */}
                        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif text-gray-900 leading-[1.1] tracking-tight max-w-[460px] mb-14 lg:mb-16">
                            Why Companies Choose Lumera Global
                        </h2>

                        {/* 3 Items dengan border kiri emas */}
                        <div className="flex flex-col gap-10 lg:gap-12 w-full max-w-[520px]">
                            {reasons.map((item, index) => (
                                <div key={index} className="flex items-start gap-5">

                                    {/* Gold Left Border Bar */}
                                    <div className="w-[3px] bg-[#C19E70] flex-shrink-0 self-stretch rounded-full"></div>

                                    {/* Content */}
                                    <div className="flex flex-col">
                                        <h3 className="text-[12px] sm:text-[13px] font-bold font-sans text-gray-900 uppercase tracking-[0.14em] mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-[14px] sm:text-[15px] font-sans text-gray-400 leading-[1.75]">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>

                    {/* ===== KOLOM KANAN (GAMBAR) ===== */}
                    <div className="w-full xl:w-1/2 relative">
                        <div className="relative w-full max-w-[600px] mx-auto xl:ml-auto xl:mr-0 border border-gray-100 shadow-sm bg-white">
                            <img
                                src="/img/img2.png"
                                alt="Apparel manufacturing"
                                className="w-full h-[500px] sm:h-[600px] lg:h-[680px] object-cover object-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
