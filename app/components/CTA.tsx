export default function CTA() {
    return (
        < section className="mt-32 p-12 bg-[#181C1C] rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden" >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C19E70]/15 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="max-w-xl relative z-10">
                <h4 className="font-serif text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
                    Ready to Scale <br /> Your Brand?
                </h4>
                <p className="text-[#E0E3E2]/60 font-[Inter] text-lg">
                    Consult your apparel supply chain needs with our expert team today.
                </p>
            </div>
            <button className="relative z-10 bg-[#C19E70] text-white px-10 py-5 rounded-xl font-[Plus_Jakarta_Sans] font-black transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-[#C19E70]/20 uppercase tracking-widest text-sm">
                Request Quote
            </button>
        </section >

    )
}