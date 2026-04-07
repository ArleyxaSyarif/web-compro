import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative px-6 md:px-16 lg:px-24 pt-40 pb-24 lg:pt-32 lg:pb-32 flex flex-col md:flex-row items-center justify-between bg-[#F7FAF9] overflow-hidden">

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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#C19E70]/5 to-transparent pointer-events-none -z-10"></div>

            {/* Left Column: Text & Buttons */}
            <div className="relative z-10 md:w-full lg:w-2/3 md:max-w-[800px] space-y-6">


                {/* Top Label */}
                <div className="font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#c9a675] font-bold">
                    Global Apparel Sourcing & Trading Hub
                </div>

                {/* Main Headline */}
                {/* Main Headline */}
                {/* Main Headline - Ukuran diperkecil agar lebih elegan */}
                <h1 className="font-serif text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] text-[#181C1C]">
                    Connecting<br />
                    <span className="text-[#c9a675] italic">Premium Factories</span><br />
                    <span className="text-[#181C1C]">with Global Buyers.</span>
                </h1>



                {/* Description - Lebar disesuaikan agar mirip foto */}
                <p className="font-sans text-base md:text-[17px] text-[#556060] leading-[1.6] max-w-[500px] pt-2">
                    Lumera Global helps brands, retailers, and distributors source high-quality apparel with scalable supply chain solutions. Based in Singapore, we coordinate reliable production across the leading manufacturing hubs in Asia.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start justify-start gap-4 pt-6">
                    <button className="bg-[#c9a675] text-white px-8 py-4 rounded font-bold text-xs tracking-widest uppercase hover:brightness-110 transition-all font-sans shadow-lg shadow-[#c9a675]/20">
                        Work With Us
                    </button>
                    <button className="bg-transparent border border-[#e5d5c5] text-[#7a8585] px-8 py-4 rounded font-bold text-xs tracking-widest uppercase hover:bg-[#181C1C] hover:text-white transition-all font-sans">
                        Our Services
                    </button>
                </div>

                {/* Bottom Trust Badges */}
                <div className="pt-8 flex flex-wrap items-center justify-start gap-x-8 gap-y-4 text-[9px] md:text-[10px] font-sans font-bold text-[#9ca3a3] uppercase tracking-[0.2em]">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a675]"></div>
                        Singapore Registered
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a675]"></div>
                        Asia Factory Network
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a675]"></div>
                        OEM & Private Label
                    </div>
                </div>
            </div>

            {/* Right Column: Image & Floating Badge */}
            <div className="relative md:w-1/2 flex items-center justify-center p-8 mt-16 md:mt-0 group z-10">
                {/* Glow blur background terapung */}
                <div className="absolute inset-0 bg-[#C19E70]/10 rounded-full blur-[140px] -z-10 transform -translate-y-1/2 scale-110"></div>

                {/* Main Hero Image */}
                <div className="relative w-full max-w-[550px] aspect-[4/5] rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.07)] bg-white p-2 lg:p-3 z-10">
                    <img
                        src="/img/apparelHero2.png"
                        alt="Connecting Premium Factories"
                        className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-1000"
                    />
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute bottom-[-30px] left-[-10px] md:left-[-30px] bg-white rounded-xl p-6 lg:p-8 shadow-2xl flex flex-col items-center justify-center gap-1 z-20 scale-90 lg:scale-100">
                    <div className="font-serif text-[60px] lg:text-[80px] font-bold text-[#c9a675] leading-none tracking-tighter">
                        20<span className="text-[40px] lg:text-[50px] font-sans font-light align-top">+</span>
                    </div>
                    <div className="text-[9px] lg:text-[10px] font-sans font-bold text-[#889292] uppercase tracking-[0.25em] whitespace-nowrap text-center mt-2">
                        Years Industry<br />
                        Experience
                    </div>
                </div>
            </div>

        </section>
    );
}