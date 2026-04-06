import React from 'react';

const services = [
    {
        number: '01.',
        title: 'OEM Manufacturing',
        description:
            'Custom apparel production based on your exact specifications, materials, and technical requirements.',
        features: ['Custom Design Production', 'Rigorous Quality Control'],
    },
    {
        number: '02.',
        title: 'Private Label',
        description:
            'Launch your clothing brand with our full private label services, including branding and retail-ready packaging.',
        features: ['Custom Branding & Tags', 'Packaging Solutions'],
    },
    {
        number: '03.',
        title: 'Apparel Sourcing',
        description:
            'Connecting global buyers with verified factories across Asia, ensuring competitive pricing and reliable supply.',
        features: ['Factory Matching', 'Cost Negotiation'],
    },
];

export default function ServiceSection() {
    return (
        <section className="w-full bg-white py-24 lg:py-32">
            <div className="mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-[1400px]">

                {/* ===== TOP AREA: Heading kiri + Deskripsi kanan ===== */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-20 mb-16 lg:mb-20">

                    {/* Kiri */}
                    <div className="w-full lg:w-1/2">
                        <div className="text-[10px] sm:text-[11px] font-bold font-sans text-[#C19E70] uppercase tracking-[0.25em] mb-5">
                            Core Capabilities
                        </div>
                        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif text-gray-900 leading-[1.1] tracking-tight max-w-[480px]">
                            End-to-End Apparel Sourcing Solutions
                        </h2>
                    </div>

                    {/* Kanan */}
                    <div className="w-full lg:w-1/2 flex lg:items-end lg:justify-end pt-18">
                        <p className="text-[15px] sm:text-[16px] font-sans text-gray-400 leading-[1.75] max-w-[480px] lg:text-right">
                            We provide comprehensive manufacturing and supply chain
                            services designed to help your brand scale internationally.
                        </p>
                    </div>

                </div>


                {/* ===== 3 KOLOM SERVICE CARDS ===== */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start">

                            {/* Nomor */}
                            <div className="text-[13px] font-sans font-bold text-[#C19E70] tracking-[0.05em] mb-5">
                                {service.number}
                            </div>

                            {/* Judul */}
                            <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] font-serif text-gray-900 leading-[1.2] tracking-tight mb-5">
                                {service.title}
                            </h3>

                            {/* Deskripsi */}
                            <p className="text-[14px] sm:text-[15px] font-sans text-gray-400 leading-[1.75] mb-8">
                                {service.description}
                            </p>

                            {/* Feature List dengan titik emas */}
                            <div className="flex flex-col gap-3">
                                {service.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center gap-3">
                                        <div className="w-[5px] h-[5px] rounded-full bg-[#C19E70] flex-shrink-0"></div>
                                        <span className="text-[9px] sm:text-[10px] font-bold font-sans text-gray-500 uppercase tracking-[0.15em]">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
