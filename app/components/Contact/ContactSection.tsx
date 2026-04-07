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
        /* Section dengan padding yang identik dengan Navbar: px-6 md:px-16 lg:px-24 */
        <section id="contact" className="relative bg-white py-20 lg:py-32 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-gray-50">
            {/* GRID BACKGROUND (Sangat Halus) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#181C1C 1px, transparent 1px), linear-gradient(90deg, #181C1C 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="w-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">

                    {/* LEFT COLUMN: CONTACT INFO (Sejajar dengan Logo di Navbar) */}
                    <div className="w-full lg:w-[45%] space-y-10">
                        <div>
                            <span className="text-[#c9a675] font-sans font-bold tracking-[0.25em] text-[10px] uppercase mb-4 inline-block">
                                GET IN TOUCH
                            </span>
                            <h2 className="font-serif text-[36px] md:text-[42px] font-bold text-[#181C1C] leading-[1.1] mb-6">
                                Contact Lumera Global
                            </h2>
                            <p className="font-serif italic text-[#556060] text-lg leading-relaxed opacity-90 max-w-md">
                                Let's discuss your apparel sourcing, private label, OEM manufacturing, or wholesale requirements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 pt-4">
                            {/* Headquarters */}
                            <div className="flex gap-5 items-start group">
                                <div className="w-10 h-10 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-1.5">Singapore Hub</h4>
                                    <p className="text-[14px] text-[#556060] leading-snug">
                                        68 Circular Road #02-001<br />Singapore 049422
                                    </p>
                                </div>
                            </div>

                            {/* Email & Whatsapp */}
                            <div className="flex flex-col gap-10">
                                <div className="flex gap-5 items-start">
                                    <div className="w-10 h-10 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                        <span className="material-symbols-outlined text-[20px]">mail</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-1.5">Email</h4>
                                        <p className="text-[14px] text-[#556060]">lumerasgp@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-5 items-start">
                                    <div className="w-10 h-10 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                        <span className="material-symbols-outlined text-[20px]">phone_iphone</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-1.5">Whatsapp</h4>
                                        <p className="text-[14px] text-[#556060]">+65 9084 6600</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: INQUIRY FORM (Sejajar dengan Tombol di Navbar) */}
                    <div className="w-full lg:w-[50%] bg-[#f8f9f9] p-8 md:p-14 rounded-lg border border-gray-100 shadow-sm">
                        <div className="mb-10 text-left">
                            <h3 className="font-serif text-[28px] font-bold text-[#181C1C] mb-2">Send Inquiry</h3>
                            <p className="text-[14px] text-[#556060] opacity-80">Our team will respond promptly to your request.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.12em] uppercase mb-2.5">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 p-4 text-[14px] outline-none focus:border-[#c9a675] transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.12em] uppercase mb-2.5">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="email@company.com"
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 p-4 text-[14px] outline-none focus:border-[#c9a675] transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.12em] uppercase mb-2.5">Inquiry Type</label>
                                <div className="relative">
                                    <select
                                        name="inquiryType"
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 p-4 text-[14px] text-[#181C1C] outline-none appearance-none cursor-pointer focus:border-[#c9a675]"
                                    >
                                        <option>Apparel Sourcing</option>
                                        <option>OEM Manufacturing</option>
                                        <option>Private Label</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">expand_more</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.12em] uppercase mb-2.5">Requirement Details</label>
                                <textarea
                                    name="details"
                                    rows={3}
                                    placeholder="Describe your needs..."
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 p-4 text-[14px] outline-none focus:border-[#c9a675] transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#c9a675] hover:bg-[#181C1C] text-white font-bold py-5 px-6 transition-all text-[12px] uppercase tracking-[0.2em] rounded shadow-sm">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
