'use client';
import React, { useState } from 'react';

export default function KontakSection() {
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
        <section className="bg-white py-24 lg:py-32 px-6 md:px-16 lg:px-24">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* LEFT COLUMN: CONTACT INFO */}
                    <div className="w-full lg:w-5/12 space-y-12">
                        <div>
                            <span className="text-[#c9a675] font-sans font-bold tracking-[0.25em] text-[10px] uppercase mb-6 inline-block">
                                GET IN TOUCH
                            </span>
                            <h2 className="font-serif text-[42px] md:text-[32px] font-bold text-[#181C1C] leading-[1.1] mb-8">
                                Contact Lumera Global
                            </h2>
                            <p className="font-serif italic text-[#556060] text-lg leading-relaxed opacity-90 max-w-md">
                                Let's discuss your apparel sourcing, private label, OEM manufacturing, or wholesale requirements.
                            </p>
                        </div>

                        <div className="space-y-10 pt-4">
                            {/* Headquarters */}
                            <div className="flex gap-6 items-start group">
                                <div className="w-10 h-10 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                                </div>
                                <div>
                                    <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-2">Singapore Headquarters</h4>
                                    <p className="text-[14px] text-[#556060] leading-relaxed">
                                        Lumera Global Pte. Ltd.<br />68 Circular Road #02-001<br />Singapore 049422
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                    <span className="material-symbols-outlined text-[20px]">mail</span>
                                </div>
                                <div>
                                    <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-2">Email</h4>
                                    <p className="text-[14px] text-[#556060]">lumeraglobalsgp@gmail.com</p>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                    <span className="material-symbols-outlined text-[20px]">phone_iphone</span>
                                </div>
                                <div>
                                    <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-2">Whatsapp</h4>
                                    <p className="text-[14px] text-[#556060]">+65 9084 6600</p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex gap-6 items-start">
                                <div className="w-10 h-10 rounded bg-[#f8f5f0] flex items-center justify-center shrink-0 text-[#c9a675]">
                                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                                </div>
                                <div>
                                    <h4 className="font-sans text-[11px] font-bold tracking-[0.15em] text-[#181C1C] uppercase mb-2">Business Hours</h4>
                                    <p className="text-[14px] text-[#556060]">Monday – Friday, 9:00 AM – 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: INQUIRY FORM */}
                    <div className="w-full lg:w-7/12 bg-[#f8f9f9] p-10 md:p-16 rounded-sm shadow-sm">
                        <div className="mb-12">
                            <h3 className="font-serif text-[28px] font-bold text-[#181C1C] mb-3">Send Us an Inquiry</h3>
                            <p className="text-[14px] text-[#556060] opacity-80">Fill in your requirements and our team will respond with the next steps.</p>
                        </div>

                        <form className="space-y-8">
                            <div>
                                <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.15em] uppercase mb-3">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 p-4 text-[14px] outline-none focus:border-[#c9a675] transition-colors placeholder:text-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.15em] uppercase mb-3">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email@company.com"
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 p-4 text-[14px] outline-none focus:border-[#c9a675] transition-colors placeholder:text-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.15em] uppercase mb-3">Inquiry Type</label>
                                <div className="relative">
                                    <select
                                        name="inquiryType"
                                        onChange={handleChange}
                                        className="w-full bg-white border border-gray-200 p-4 text-[14px] text-[#181C1C] outline-none appearance-none cursor-pointer focus:border-[#c9a675] transition-colors"
                                    >
                                        <option>Apparel Sourcing</option>
                                        <option>OEM Manufacturing</option>
                                        <option>Private Label</option>
                                    </select>
                                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">expand_more</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-[#181C1C] tracking-[0.15em] uppercase mb-3">Requirement Details</label>
                                <textarea
                                    name="details"
                                    rows={5}
                                    placeholder="Describe your apparel sourcing needs..."
                                    onChange={handleChange}
                                    className="w-full bg-white border border-gray-200 p-4 text-[14px] outline-none focus:border-[#c9a675] transition-colors resize-none placeholder:text-gray-300"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#c9a675] hover:bg-[#b89564] text-white font-bold py-5 px-6 transition-all text-[12px] uppercase tracking-[0.2em] shadow-lg shadow-[#c9a675]/20">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}