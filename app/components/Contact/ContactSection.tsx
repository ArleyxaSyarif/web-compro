'use client';
import React, { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiryType: 'Apparel Sourcing',
        details: '',
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="relative bg-white py-20 lg:py-28 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-gray-50">

            {/* GRID BACKGROUND */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#181C1C 1px, transparent 1px), linear-gradient(90deg, #181C1C 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* LEFT COLUMN: CONTACT INFO (Dibuat sedikit lebih ringkas) */}
                    <div className="w-full lg:w-5/12 space-y-10">
                        <div>
                            <span className="text-[#c9a675] font-sans font-bold tracking-[0.25em] text-[10px] uppercase mb-4 inline-block">
                                GET IN TOUCH
                            </span>
                            <h2 className="font-serif text-[32px] font-bold text-[#181C1C] leading-[1.1] mb-6">
                                Contact Lumera Global
                            </h2>
                            <p className="font-serif italic text-[#556060] text-base leading-relaxed opacity-90 max-w-sm">
                                Let's discuss your apparel sourcing, private label, OEM manufacturing, or wholesale requirements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 pt-2">
                            {/* Headquarters */}
                            <div className="flex gap-4 items-start group">
                                <div className="w-9 h-9 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-sans text-[10px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-1">Singapore Hub</h4>
                                    <p className="text-[13px] text-[#556060] leading-snug">
                                        68 Circular Road #02-001<br />Singapore 049422
                                    </p>
                                </div>
                            </div>

                            {/* Email & WhatsApp Row */}
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-4 items-start">
                                    <div className="w-9 h-9 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                        <span className="material-symbols-outlined text-[18px]">mail</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-sans text-[10px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-1">Email</h4>
                                        <p className="text-[13px] text-[#556060]">lumerasgp@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-9 h-9 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                        <span className="material-symbols-outlined text-[18px]">phone_iphone</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-sans text-[10px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-1">Whatsapp</h4>
                                        <p className="text-[13px] text-[#556060]">+65 9084 6600</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: INQUIRY FORM (Dibuat lebih compact) */}
                    <div className="w-full lg:w-7/12 bg-[#f8f9f9] p-8 md:p-12 rounded-lg border border-gray-100 shadow-sm">
                        <div className="mb-8">
                            <h3 className="font-serif text-[24px] font-bold text-[#181C1C] mb-2">Send Inquiry</h3>
                            <p className="text-[13px] text-[#556060] opacity-80">Our team will respond within 24 hours.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.12em] uppercase mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 p-3 text-[13px] outline-none focus:border-[#c9a675] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.12em] uppercase mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email@company.com"
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 p-3 text-[13px] outline-none focus:border-[#c9a675] transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.12em] uppercase mb-2">Inquiry Type</label>
                                <div className="relative">
                                    <select
                                        name="inquiryType"
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 p-3 text-[13px] text-[#181C1C] outline-none appearance-none cursor-pointer focus:border-[#c9a675]"
                                    >
                                        <option>Apparel Sourcing</option>
                                        <option>OEM Manufacturing</option>
                                        <option>Private Label</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-lg">expand_more</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.12em] uppercase mb-2">Message</label>
                                <textarea
                                    name="details"
                                    rows={3}
                                    placeholder="Briefly describe your needs..."
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 p-3 text-[13px] outline-none focus:border-[#c9a675] transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#c9a675] hover:bg-[#181C1C] text-white font-bold py-4 px-6 transition-all text-[11px] uppercase tracking-[0.15em] rounded shadow-md">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
