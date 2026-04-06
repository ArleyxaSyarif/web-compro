'use client';
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Apparel Sourcing',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full bg-white py-24 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-[1400px]">

        <div className="flex flex-col xl:flex-row items-start justify-between gap-16 xl:gap-24">

          {/* ===== KOLOM KIRI (INFO KONTAK) ===== */}
          <div className="w-full xl:w-1/2 flex flex-col items-start">

            {/* Subtitle */}
            <div className="text-[10px] sm:text-[11px] font-bold font-sans text-[#C19E70] uppercase tracking-[0.25em] mb-4">
              Get In Touch
            </div>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-serif text-gray-900 leading-[1.1] tracking-tight mb-5">
              Contact Lumera Global
            </h2>

            {/* Description (italic serif) */}
            <p className="text-[16px] sm:text-[17px] font-serif italic text-gray-500 leading-[1.7] max-w-[480px] mb-14">
              Let&apos;s discuss your apparel sourcing, private label, OEM manufacturing,
              or wholesale requirements.
            </p>

            {/* Contact Items */}
            <div className="flex flex-col gap-10 w-full">

              {/* Singapore Headquarters */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C19E70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-[12px] font-bold font-sans text-black uppercase tracking-[0.14em] mb-2">
                    Singapore Headquarters
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-sans text-gray-500 leading-[1.7]">
                    Lumera Global Pte. Ltd.<br />
                    68 Circular Road #02-001<br />
                    Singapore 049422
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C19E70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-[12px] font-bold font-sans text-[#C19E70] uppercase tracking-[0.14em] mb-2">
                    Email
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-sans text-black  leading-[1.7]">
                    lumeraglobalsgp@gmail.com
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C19E70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-[12px] font-bold font-sans text-[#C19E70] uppercase tracking-[0.14em] mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-sans text-black leading-[1.7]">
                    +65 9084 6600
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C19E70" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-[12px] font-bold font-sans text-[#C19E70] uppercase tracking-[0.14em] mb-2">
                    Business Hours
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-sans text-gray-500 leading-[1.7]">
                    Monday – Friday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ===== KOLOM KANAN (FORM) ===== */}
          <div className="w-full xl:w-1/2">
            <div className="bg-[#FAFAFA] p-8 sm:p-10 lg:p-14">

              {/* Form Heading */}
              <h3 className="text-[26px] sm:text-[30px] lg:text-[34px] font-serif text-gray-900 leading-[1.15] tracking-tight mb-3">
                Send Us an Inquiry
              </h3>
              <p className="text-[14px] sm:text-[15px] font-serif italic text-gray-400 leading-[1.7] mb-10">
                Fill in your requirements and our team will respond with the next steps.
              </p>

              {/* Form */}
              <form className="flex flex-col gap-7">

                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] sm:text-[10px] font-bold font-sans text-gray-400 uppercase tracking-[0.18em]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full border-b border-gray-200 bg-transparent py-3 text-[15px] font-sans text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#C19E70] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] sm:text-[10px] font-bold font-sans text-gray-400 uppercase tracking-[0.18em]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    className="w-full border-b border-gray-200 bg-transparent py-3 text-[15px] font-sans text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#C19E70] transition-colors"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] sm:text-[10px] font-bold font-sans text-gray-400 uppercase tracking-[0.18em]">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full border-b border-gray-200 bg-transparent py-3 text-[15px] font-sans text-gray-900 focus:outline-none focus:border-[#C19E70] transition-colors appearance-none cursor-pointer"
                  >
                    <option>Apparel Sourcing</option>
                    <option>OEM Manufacturing</option>
                    <option>Private Label</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Requirement Details */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] sm:text-[10px] font-bold font-sans text-gray-400 uppercase tracking-[0.18em]">
                    Requirement Details
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe your apparel sourcing needs..."
                    rows={4}
                    className="w-full border border-gray-200 bg-transparent p-4 text-[15px] font-sans text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-[#C19E70] transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#C19E70] text-white py-4 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] hover:bg-[#a6865c] transition-colors mt-2"
                >
                  Submit Inquiry
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
