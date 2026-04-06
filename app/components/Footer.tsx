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
                lumera
              </div>
              <div className="text-[6px] font-sans text-gray-500 tracking-[0.45em] uppercase mt-1 text-center">
                Global
              </div>
            </div>

            <div className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.14em] leading-[2]">
              Lumera Global Pte. Ltd.<br />
              68 Circular Road #02-001<br />
              Singapore 049422
            </div>
          </div>

          {/* Kolom 2: Services */}
          <div className="flex flex-col items-start">
            <h4 className="text-[10px] sm:text-[11px] font-bold font-sans text-gray-900 uppercase tracking-[0.2em] mb-6">
              Services
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                OEM Manufacturing
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Private Label
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Apparel Sourcing
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Bulk Wholesale
              </Link>
            </div>
          </div>

          {/* Kolom 3: Company */}
          <div className="flex flex-col items-start">
            <h4 className="text-[10px] sm:text-[11px] font-bold font-sans text-gray-900 uppercase tracking-[0.2em] mb-6">
              Company
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Global Network
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Work With Us
              </Link>
              <Link href="#" className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em] hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Kolom 4: Contact */}
          <div className="flex flex-col items-start">
            <h4 className="text-[10px] sm:text-[11px] font-bold font-sans text-gray-900 uppercase tracking-[0.2em] mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <span className="text-[12px] sm:text-[13px] font-sans text-gray-400 tracking-[0.04em]">
                lumeraglobalsgp@gmail.com
              </span>
              <span className="text-[12px] sm:text-[13px] font-sans text-gray-400 uppercase tracking-[0.08em]">
                WhatsApp: +65 9084 6600
              </span>
            </div>
            <div className="mt-8 text-[10px] font-sans text-gray-300 uppercase tracking-[0.12em]">
              Mon – Fri: 9:00 AM – 6:00 PM
            </div>
          </div>

        </div>

        {/* ===== GARIS PEMISAH ===== */}
        <div className="w-full h-px bg-gray-100 mb-8"></div>

        {/* ===== BOTTOM BAR ===== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.12em]">
            © 2026 Lumera Global Pte. Ltd.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.12em] hover:text-gray-900 transition-colors italic">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[10px] font-sans text-gray-400 uppercase tracking-[0.12em] hover:text-gray-900 transition-colors italic">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
