import React from 'react';

const services = [
    {
        number: '01.',
        title: 'OEM Manufacturing',
        description:
            'Custom apparel production based on your exact specifications, materials, and technical requirements.',
        features: ['CUSTOM DESIGN PRODUCTION', 'RIGOROUS QUALITY CONTROL'],
    },
    {
        number: '02.',
        title: 'Private Label',
        description:
            'Launch your clothing brand with our full private label services, including branding and retail-ready packaging.',
        features: ['CUSTOM BRANDING & TAGS', 'PACKAGING SOLUTIONS'],
    },
    {
        number: '03.',
        title: 'Apparel Sourcing',
        description:
            'Connecting global buyers with verified factories across Asia, ensuring competitive pricing and reliable supply.',
        features: ['FACTORY MATCHING', 'COST NEGOTIATION'],
    },
];

export default function ServiceSection() {
    return (
        <section className="relative w-full bg-[#FAFAFA] py-24 lg:py-32 px-6 md:px-16 lg:px-24 overflow-hidden">

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

            {/* Wrapper konten dengan z-index agar berada di atas grid */}
            <div className="relative z-10 w-full">

                {/* ===== HEADER ===== */}
                <header className="mb-20 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                    <div className="max-w-2xl">
                        <span className="inline-block text-[#c9a675] font-sans font-bold tracking-[0.25em] text-[10px] md:text-xs uppercase mb-4 bg-[#FAFAFA] pr-4">
                            Core Capabilities
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-bold text-[#181C1C] leading-[1.1] tracking-tight">
                            End-to-End Apparel <br />
                            Sourcing Solutions
                        </h2>
                    </div>

                    <div className="md:max-w-lg pt-4 md:pt-12">
                        <p className="text-[#556060] text-base md:text-[17px] leading-[1.6] font-sans">
                            We provide comprehensive manufacturing and supply chain services designed to help your brand scale internationally.
                        </p>
                    </div>
                </header>

                {/* ===== 3 SERVICE COLUMNS ===== */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-20 gap-y-16 w-full">
                    {services.map((service, index) => (
                        <article key={index} className="flex flex-col relative group">
                            {/* Efek glow halus saat di-hover (Opsional, agar menyatu dengan nuansa grid) */}
                            <div className="absolute -inset-6 bg-[#c9a675]/0 group-hover:bg-[#c9a675]/[0.02] rounded-2xl transition-colors duration-500 -z-10 pointer-events-none"></div>

                            {/* Number */}
                            <div className="text-[#c9a675] font-sans font-bold text-[13px] tracking-widest mb-6">
                                {service.number}
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-3xl lg:text-[32px] font-bold text-[#181C1C] mb-4 tracking-tight">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#556060] text-[15px] leading-relaxed font-sans mb-10 h-auto md:min-h-[80px] max-w-[90%]">
                                {service.description}
                            </p>

                            {/* Features (Bullet Points) */}
                            <div className="mt-auto">
                                <ul className="space-y-4">
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-4">
                                            {/* Square Bullet Point */}
                                            <div className="w-1.5 h-1.5 bg-[#c9a675]"></div>
                                            <span className="font-sans text-[10px] md:text-[11px] font-bold text-[#889292] uppercase tracking-[0.15em]">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom Line Separator */}
                <div className="w-full h-[1px] bg-[#e5e7e7] mt-24 relative z-10"></div>
            </div>
        </section>
    );
}