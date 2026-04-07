import React from 'react';

const steps = [
    { number: '01', title: 'INQUIRY', description: 'Submit requirements: apparel type, quantity, and specs.', color: '#c9a675' },
    { number: '02', title: 'MATCHING', description: 'Identifying suitable factories based on capability and cost.' },
    { number: '03', title: 'QUOTATION', description: 'Detailed unit price, MOQ, and lead time details.', color: '#c9a675' },
    { number: '04', title: 'SAMPLING', description: 'Prototype production for quality and fit approval.' },
    { number: '05', title: 'PRODUCTION', description: 'Bulk manufacturing begins after sample approval.', color: '#c9a675' },
    { number: '06', title: 'INSPECTION', description: 'Pre-shipment quality control and check inspection.' },
    { number: '07', title: 'SHIPMENT', description: 'Global delivery coordination to client warehouse.', color: '#c9a675' },
];

export default function ProcessSection() {
    return (
        <section id="process" className="w-full bg-white py-24 lg:py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
            <div className="max-w-[1440px] mx-auto">

                {/* Header Section */}
                <header className="text-center mb-24">
                    <span className="text-[#c9a675] font-sans font-bold tracking-[0.25em] text-[10px] uppercase mb-4 inline-block">
                        OUR WORKFLOW
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[48px] font-bold text-[#181C1C] leading-tight">
                        End-to-End Sourcing Process
                    </h2>
                </header>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-16">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-start text-left group">

                            {/* Step Number - Dibuat lebih besar (32px) dan margin bawah ditambah (mb-8) */}
                            <span className="text-[32px] font-serif font-bold text-[#f0f0f0] leading-none transition-colors duration-300 group-hover:text-[#c9a675]/20">
                                {step.number}
                            </span>

                            {/* Title */}
                            {/* Title - Menggunakan warna dari data steps jika ada */}
                            <h3
                                className="font-sans text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
                                style={{ color: step.color || '#181C1C' }}
                            >
                                {step.title}
                            </h3>


                            {/* Description */}
                            <p className="font-sans text-[13px] text-[#556060] leading-[1.6] max-w-[160px]">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}