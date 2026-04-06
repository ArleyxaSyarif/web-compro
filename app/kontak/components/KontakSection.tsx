'use client';
import React, { useState } from 'react';

export default function KontakSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        inquiryType: 'Grosir / Partai Besar',
        details: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="relative bg-[#F7FAF9] text-[#181C1C] py-24 lg:py-32 px-4 sm:px-6 lg:px-12 font-sans overflow-hidden">

            {/* GRID BACKGROUND (Sangat Halus - Light Mode) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#181C1C 1px, transparent 1px), linear-gradient(90deg, #181C1C 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            {/* RADIAL GLOW */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffaa00]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="font-[Plus_Jakarta_Sans] text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
                        Mulai Bisnis Anda <span className="text-[#ffaa00]">Bersama Lamonte.</span>
                    </h2>
                    <p className="text-[#524433] text-lg md:text-xl font-[Inter] mb-10 max-w-2xl mx-auto leading-relaxed opacity-80">
                        Mari diskusikan kebutuhan stok toko, pemesanan paket usaha, atau pendaftaran kemitraan Anda bersama tim ahli kami.
                    </p>

                    {/* Badges/Tags */}
                    <div className="flex flex-wrap justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#825500]">
                        <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-[#d8c3ac]/30 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa00] animate-pulse"></span>
                            Respon Cepat
                        </span>
                        <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-[#d8c3ac]/30 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa00] animate-pulse"></span>
                            Konsultasi Gratis
                        </span>
                        <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-[#d8c3ac]/30 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffaa00] animate-pulse"></span>
                            Proposal & Harga
                        </span>
                    </div>
                </div>

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Form */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 border border-[#d8c3ac]/20 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold font-[Plus_Jakarta_Sans]">Kirim Pertanyaan</h2>
                            <p className="text-sm text-[#524433] mt-2 opacity-70">Isi detail kebutuhan Anda di bawah ini dan tim support kami akan segera merespons Anda.</p>
                        </div>

                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-3">NAMA LENGKAP / NAMA TOKO *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Cth: Toko Baju Anak Budi"
                                        className="w-full bg-[#F1F4F4]/50 border border-[#d8c3ac]/30 rounded-xl p-4 text-sm text-[#181C1C] focus:outline-none focus:border-[#ffaa00] focus:ring-1 focus:ring-[#ffaa00] transition-all placeholder:text-[#524433]/40"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-3">JENIS KEBUTUHAN *</label>
                                    <select
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                        className="w-full bg-[#F1F4F4]/50 border border-[#d8c3ac]/30 rounded-xl p-4 text-sm text-[#181C1C] focus:outline-none focus:border-[#ffaa00] appearance-none cursor-pointer"
                                    >
                                        <option>Grosir / Partai Besar</option>
                                        <option>Paket Usaha Pemula</option>
                                        <option>Daftar Mitra / Agen</option>
                                        <option>Pertanyaan Umum</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-3">EMAIL AKTIF *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@domain.com"
                                        className="w-full bg-[#F1F4F4]/50 border border-[#d8c3ac]/30 rounded-xl p-4 text-sm text-[#181C1C] focus:outline-none focus:border-[#ffaa00] transition-all placeholder:text-[#524433]/40"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-3">NOMOR WHATSAPP *</label>
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        placeholder="08123xxxx"
                                        className="w-full bg-[#F1F4F4]/50 border border-[#d8c3ac]/30 rounded-xl p-4 text-sm text-[#181C1C] focus:outline-none focus:border-[#ffaa00] transition-all placeholder:text-[#524433]/40"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-3">DETAIL PESAN / KEBUTUHAN</label>
                                <textarea
                                    name="details"
                                    value={formData.details}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Ceritakan kebutuhan stok baju, budget, atau pertanyaan Anda..."
                                    className="w-full bg-[#F1F4F4]/50 border border-[#d8c3ac]/30 rounded-xl p-4 text-sm text-[#181C1C] focus:outline-none focus:border-[#ffaa00] transition-all resize-none placeholder:text-[#524433]/40"
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full bg-[#ffaa00] hover:brightness-110 text-[#181C1C] font-bold py-5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#825500]/10 text-lg uppercase tracking-widest font-[Plus_Jakarta_Sans]">
                                <span className="material-symbols-outlined text-2xl">send</span>
                                Kirim Pertanyaan
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Contact Info */}
                    <div className="lg:col-span-1 space-y-8">

                        {/* Info Card */}
                        <div className="bg-white rounded-3xl p-8 border border-[#d8c3ac]/20 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
                            <h3 className="text-xl font-bold mb-8 font-[Plus_Jakarta_Sans]">Layanan Pelanggan</h3>

                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#ffaa00]/10 flex items-center justify-center flex-shrink-0 text-[#825500] border border-[#ffaa00]/20">
                                        <span className="material-symbols-outlined text-2xl">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-1">Gudang Pusat Lamonte</p>
                                        <p className="text-sm text-[#524433] leading-relaxed font-[Inter]">Jl. Pusat Grosir No. 88, Jakarta Pusat, DKI Jakarta, 10230</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#ffaa00]/10 flex items-center justify-center flex-shrink-0 text-[#825500] border border-[#ffaa00]/20">
                                        <span className="material-symbols-outlined text-2xl">phone_iphone</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-1">WhatsApp (Fast Response)</p>
                                        <p className="text-sm text-[#524433] font-[Inter]">+62 812-3456-7890</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#ffaa00]/10 flex items-center justify-center flex-shrink-0 text-[#825500] border border-[#ffaa00]/20">
                                        <span className="material-symbols-outlined text-2xl">mail</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-sm text-[#524433] font-[Inter]">cs@lamonte.id</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#ffaa00]/10 flex items-center justify-center flex-shrink-0 text-[#825500] border border-[#ffaa00]/20">
                                        <span className="material-symbols-outlined text-2xl">schedule</span>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-[#825500] uppercase tracking-widest mb-1">Jam Operasional</p>
                                        <p className="text-sm text-[#524433] font-[Inter]">Senin – Sabtu, 08:00 – 17:00 WIB</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-12 bg-[#25D366] hover:brightness-110 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#25D366]/20">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Chat via WhatsApp
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Banner CTA */}
                <div className="mt-12 bg-white rounded-3xl p-8 md:p-12 border border-[#d8c3ac]/20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffaa00]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="flex items-center gap-8 relative z-10">
                        <div className="hidden sm:flex h-16 w-16 bg-[#ffaa00]/10 rounded-2xl items-center justify-center text-[#ffaa00] border border-[#ffaa00]/20">
                            <span className="material-symbols-outlined text-4xl">download_for_offline</span>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold font-[Plus_Jakarta_Sans]">Perlu Proposal Lengkap?</h4>
                            <p className="text-[#524433] mt-2 max-w-xl font-[Inter] opacity-70">
                                Dapatkan dokumen komprehensif berisi detail layanan, portofolio terbaru, dan skema harga grosir Lamonte. Unduh company profile kami.
                            </p>
                        </div>
                    </div>
                    <button className="relative z-10 whitespace-nowrap bg-[#ffaa00] hover:brightness-110 text-[#181C1C] font-bold py-5 px-10 rounded-xl transition-all flex items-center gap-3 uppercase tracking-widest text-sm">
                        <span className="material-symbols-outlined text-2xl">picture_as_pdf</span>
                        Download Company Profile
                    </button>
                </div>

            </div>
        </section>
    );
}

