import React from 'react';

const steps = [
    {
        number: '01',
        title: 'Pendaftaran',
        description: 'Hubungi admin kami untuk mendaftar sebagai mitra agen atau reseller.',
        color: '#C19E70',
    },
    {
        number: '02',
        title: 'Pilih Produk',
        description: 'Akses katalog terbaru kami dan pilih model baju sesuai kebutuhan pasar.',
    },
    {
        number: '03',
        title: 'Pemesanan',
        description: 'Tentukan jumlah pesanan untuk partai besar, seri, atau paket usaha.',
        color: '#C19E70',
    },
    {
        number: '04',
        title: 'Pembayaran',
        description: 'Lakukan pembayaran melalui rekening resmi kami yang aman dan terverifikasi.',
    },
    {
        number: '05',
        title: 'QC & Packing',
        description: 'Tim kami melakukan pengecekan kualitas (QC) ketat dan pengemasan barang.',
        color: '#C19E70',
    },
    {
        number: '06',
        title: 'Pengiriman',
        description: 'Pesanan dikirim ke seluruh Indonesia dengan ekspedisi cargo termurah.',
    },
    {
        number: '07',
        title: 'Siap Jualan',
        description: 'Barang tiba di toko Anda dan siap dijual untuk meraup keuntungan maksimal.',
        color: '#C19E70',
    },
];

export default function ProcessSection() {
    return (
        <section className="w-full bg-white py-24 lg:py-32">
            <div className="mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-[1400px]">

                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <div className="text-[10px] sm:text-[11px] font-bold font-sans text-[#C19E70] uppercase tracking-[0.25em] mb-4">
                        Alur Pemesanan
                    </div>
                    <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif text-gray-900 leading-[1.15] tracking-tight">
                        Langkah Mudah Belanja di Lamonte
                    </h2>
                </div>

                {/* 7 Steps Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-start">

                            {/* Big Faded Number */}
                            <div className="text-[56px] lg:text-[64px] font-serif text-gray-900/[0.06] leading-none mb-1 tracking-tight select-none">
                                {step.number}
                            </div>

                            {/* Title */}
                            {/* Title */}
                            <h3 className={`text-[11px] sm:text-[12px] font-bold font-sans uppercase tracking-[0.12em] mb-3 ${index % 2 === 0 ? 'text-[#C19E70]' : 'text-gray-900'}`}>
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[13px] sm:text-[14px] font-sans text-gray-400 leading-[1.65]">
                                {step.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
