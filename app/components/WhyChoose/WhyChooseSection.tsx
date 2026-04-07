import React from 'react';

const valueProps = [
    {
        title: "SINGAPORE-BASED HUB",
        description: "Operating from Singapore provides a trusted international trading structure for global buyers and partners."
    },
    {
        title: "DIRECT FACTORY NETWORK",
        description: "Access to verified manufacturing partners across Asia, enabling competitive pricing and flexible production."
    },
    {
        title: "SCALABLE PRODUCTION",
        description: "From small boutique batch orders to large-scale mass manufacturing, we adapt to your business needs."
    }
];

export default function WhyChooseSection() {
    return (
        /* Section dengan padding yang selaras dengan Navbar (lg:px-24) */
        <section className="w-full bg-[#f8f9f9] px-6 md:px-16 lg:px-24 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between overflow-hidden gap-12 lg:gap-20">

            {/* ===== KOLOM KIRI: Teks (Dibuat lebih lebar 60% agar judul 2 baris muat) ===== */}
            <div className="w-full lg:w-[60%] flex flex-col justify-center">

                {/* Overline */}
                <span className="inline-block text-[#c9a675] font-sans font-bold tracking-[0.25em] text-[10px] uppercase mb-4">
                    Value Proposition
                </span>

                {/* Judul: Dipaksa 2 baris tepat sebelum kata "Global" */}
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-bold text-[#181C1C] leading-[1.1] mb-14 max-w-none">
                    Why Companies Choose Lumera<br className="hidden lg:block" /> Global
                </h2>

                {/* List Items */}
                <div className="flex flex-col gap-10">
                    {valueProps.map((prop, index) => (
                        <div key={index} className="flex items-start gap-6">

                            {/* Vertical Gold Line - Tipis & Elegan */}
                            <div className="w-[4px] h-10 bg-[#c9a675] shrink-0 mt-1"></div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-sans text-[13px] font-bold text-[#181C1C] tracking-[0.12em] uppercase">
                                    {prop.title}
                                </h3>
                                <p className="text-[#556060] text-[15px] leading-[1.6] font-sans max-w-[95%] lg:max-w-[550px]">
                                    {prop.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ===== KOLOM KANAN: Image with White Frame (Align dengan Tombol Navbar) ===== */}
            <div className="w-full lg:w-[40%] flex items-center justify-end">
                <div className="relative w-full max-w-[580px] aspect-[4/5] bg-white p-3 md:p-4 shadow-[0_32px_80px_rgba(0,0,0,0.06)] rounded-xl overflow-hidden">
                    <img
                        src="/img/img2.png"
                        alt="Clothing manufacturing process"
                        className="w-full h-full object-cover grayscale brightness-95"
                    />
                </div>
            </div>

        </section>
    );
}
