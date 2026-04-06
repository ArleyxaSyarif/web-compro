import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-20 lg:pt-28 pb-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-[1400px]">

        {/* ===== TOP AREA: 4 Kolom ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20 lg:mb-28">

          {/* Kolom 1: Logo & Alamat */}
          <div className="flex flex-col items-start">
            {/* Logo */}
            <div className="flex flex-col relative pt-2 mb-8">
              <div className="absolute -top-3 left-[35%] text-gray-800">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20" />
                  <path d="M2 12h20" />
                  <path d="M4.93 4.93l14.14 14.14" />
                  <path d="M19.07 4.93L4.93 19.07" />
                </svg>
              </div>
              <div className="text-[24px] font-serif text-gray-900 leading-none tracking-tight">
                lamonte
              </div>
              <div className="text-[6px] font-sans text-gray-500 tracking-[0.45em] uppercase mt-1 text-center">
                .id
              </div>
            </div>

            <div className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.14em] leading-[2]">
              Gudang Pusat Lamonte<br />
              Jl. Pusat Grosir No. 88<br />
              Jakarta Pusat, DKI Jakarta 10230
            </div>
          </div>

          {/* Kolom 2: Services / Layanan */}
          <div className="flex flex-col items-start">
            <h4 className="text-[10px] sm:text-[11px] font-bold font-sans text-gray-900 uppercase tracking-[0.2em] mb-6">
              Layanan Kami
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Grosir & Partai Besar
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Paket Usaha Pemula
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Kemitraan Agen
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Katalog Produk
              </Link>
            </div>
          </div>

          {/* Kolom 3: Company / Perusahaan */}
          <div className="flex flex-col items-start">
            <h4 className="text-[10px] sm:text-[11px] font-bold font-sans text-gray-900 uppercase tracking-[0.2em] mb-6">
              Perusahaan
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Tentang Kami
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Cara Pemesanan
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Testimoni Mitra
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Kolom 4: Contact / Kontak */}
          <div className="flex flex-col items-start">
            <h4 className="text-[10px] sm:text-[11px] font-bold font-sans text-gray-900 uppercase tracking-[0.2em] mb-6">
              Kontak
            </h4>
            <div className="flex flex-col gap-4">
              <span className="text-[12px] sm:text-[13px] font-sans text-gray-400 tracking-[0.04em]">
                cs@lamonte.id
              </span>
              <span className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em]">
                WhatsApp: +62 812 3456 7890
              </span>
            </div>
            <div className="mt-8 text-[10px] font-sans text-gray-300 uppercase tracking-[0.12em]">
              Senin – Sabtu: 08:00 – 17:00 WIB
            </div>
          </div>

        </div>

        {/* ===== GARIS PEMISAH ===== */}
        <div className="w-full h-px bg-gray-100 mb-8"></div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.12em]">
            © {new Date().getFullYear()} Lamonte.id. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.12em] hover:text-gray-900 transition-colors italic">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.12em] hover:text-gray-900 transition-colors italic">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}