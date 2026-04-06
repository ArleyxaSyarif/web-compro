import React from 'react';

const values = [
{
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFAA00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Koleksi Terlengkap',
    description:
      'Menyediakan ribuan model pakaian anak dengan desain terbaru dan up-to-date yang siap memenuhi kebutuhan etalase toko Anda.',
  },
{
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFAA00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: 'Pengiriman Nasional',
    description:
      'Melayani pengiriman partai besar ke seluruh pelosok Nusantara dengan pilihan ekspedisi cargo termurah dan terpercaya.',
  },
 {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFAA00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Harga Tangan Pertama',
    description:
      'Jaminan harga grosir termurah langsung dari konveksi. Memberikan margin keuntungan yang maksimal untuk para mitra bisnis kami.',
  },
{
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFAA00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Layanan Cepat Tanggap',
    description:
      'Tim customer support yang profesional siap membantu proses pemesanan, pengecekan stok, hingga tracking pengiriman Anda.',
  },
];

export default function ValueSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-[1400px]">

        {/* Section Header */}
      <div className="text-center mb-16">
          <div className="text-[10px] sm:text-[11px] font-bold font-sans text-[#FFAA00] uppercase tracking-[0.25em] mb-4">
            Mengapa Memilih Kami
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif text-gray-900 leading-[1.15] tracking-tight max-w-[800px] mx-auto">
            Mitra Terbaik untuk Bisnis Pakaian Anak Anda
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 p-8 lg:p-10 flex flex-col items-start hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-8 text-[#FFAA00]">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[11px] sm:text-[12px] font-bold font-sans text-gray-900 uppercase tracking-[0.12em] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] font-sans text-gray-400 leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
