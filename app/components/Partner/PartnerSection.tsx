import React from 'react';

export default function Partnerships() {
    // Array data mitra/partner
    const partners = [
        { id: 1, name: 'Partner 1', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxUDCDLOpjCFr0Aa-ndo5875FJprogdIiE4Ot-Mumrxsn9BASG5Qd_adVhSufyf686TR71-hZ0xSLehsX1fXUBh4phLZFCoyQARDfFSyi94maGxyM0EoIaZH5q_qYNFkQnEvQg40Z6q155yp3QxDGnU1QklnrpfNls5An8L3dX1ZA3anAfTYVHYT7IWfhPiZQhXWWn_a4kyhhp4BI0o_QyDHzvrRclUTJaAQpakYyrIbvjd_8ke4xyv3rQZf-pFZOmECGIKgoMXxgj' },
        { id: 2, name: 'Partner 2', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcUkJUB9ZV0QDz8Cc-pXJqeqS2xeXv-TUMOnf2A0eylaUm3mQSMVbrPJblrtWwF_UT-5zJN15GNQlGsQpb1EGMmzdIFLRMBJB3oXkjlu8NDVg4hPmmYlZ2y9oM9vHo8uMBq0iBCBxP_20-JFQZtYnzZ35_bOxmLGJ5nv782aufA4Um2FIqQy3HLYKHj-26oNV57ZM6nGr-DIgQskXtorwbT918TCvf5GQBTDYpxDcMGT7otZYe5r1NEE9Wf4uKn9XOQMZMe7w_308N' },
        { id: 3, name: 'Partner 3', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB02AwCfyz_-NsdHROVw6xpOne4mDUhyqe2Oua6OkgmHgASkDwH7hsDO_SpbeF8EjVSFV28_ma9dUNY0za4PbP69bxlQgV_ugcSqUDjkWxMZACE0Bup5qrK3q5RWn8zL9hdkbun5hn_CH4dHuknAJFt60oRPweCZKu1QkFmdD5uQs4sdtaINyLDPltU4zVe_BoiW7XY2DtcbD3iIwGOZS43SlZjDsSyafJx3pqiVkvBN0PF3inuvvBYXBc9IK1T59HNkK5ElnxQD3Ki' },
        { id: 4, name: 'Partner 4', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1TeBpxt_hJkSzn45-Noy2PjYJIAhma0ckHC-98gcevxvAVkscf-Fc2Q2s0R6CP1ZIoosAuBZwdyceLTKwlgEWdK8wXjzQHK7IV811b23titWeV6epUK3skDCj2RFlg3bOC1u5JmZ8VFx2gmc0-_CJeGkBSGXQvvn0nMYUTqwD0kDcHpYGOevM9YUNJwIoXu9qALiM78ik-mr6TM2iZ1EPAMLjGrKJAFU9dqcsy9p17RBeHJ9YZoxvIlb6-FYx24CWzH0upx8wRWg6' },
        { id: 5, name: 'Partner 5', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcTxkstxcvXS-tBnneUH_ZD0bPw9Mlhdn1bFF6ud2W4jgxIjdfZF2TmUbgIsQl8MPm6AhT_Zd8D_7c5RTSjivAYsLXriUPYa9b-veSeaJkCmAzBG5blMNxZi0q30itj3z-pT2BVCVQJhQkVhtSQj0SpossobK6U_6nKmd41IRbT56GS3AeGI7OSVBv2aHWvRrbSKrq9RRSo_gNru5JjFEDnanfwuBdDOrKV5pSdwHPXTm85FWc0mVN3Z1CtzcEFC_5K8p-HNjxQ_0M' },
        { id: 6, name: 'Partner 6', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaqcnSXu3ixniJXHm8ggsm3ZHxHyyQSA1Z6jxhrwjDSjrkpHqDEewjFRmyzcwjfLAavaDSsvjn_bZisFpN05VoHavwlB1KGNOJBG-hmeViZ1AIWGnV_x54fLGPFgoTKY2CtcwlKBbnXplKxWTW-OoTHupafEQ8oJJNlFmjIrl2Z6BitbKDbpUODQR4X7uO1Wale7pJo0SuPWm9WmmqlanGnTYWOFun1TQyVx7OjmkKwNzD6IMtKsznt6wWhJrBYq_-6B33-TzfHE3U' },
    ];

    // Menggandakan array agar efek looping tidak pernah putus
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="pt-12 pb-16 px-6 lg:px-12 border-y border-[#d8c3ac]/10 bg-white overflow-hidden relative">



            {/* Definisi animasi CSS untuk Slider (Marquee) */}
            <style>{`
                @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                animation: marquee 35s linear infinite;
                }
                .animate-marquee:hover {
                animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    {/* Judul menggunakan warna #ffaa00 dengan spasi antar huruf yang lebar */}
                    <h2 className="font-[Inter] text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#ffaa00] font-bold flex items-center justify-center gap-4">
                        <span className="h-[1px] w-8 bg-[#ffaa00]/30 hidden md:block"></span>
                        Telah Dipercaya Oleh Mitra Kami
                        <span className="h-[1px] w-8 bg-[#ffaa00]/30 hidden md:block"></span>
                    </h2>
                </div>

                {/* Container Slider dengan efek pudar (fade) di sisi kiri & kanan */}
                <div
                    className="relative flex overflow-hidden"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                    }}
                >
                    {/* Track Slider */}
                    <div className="flex w-max animate-marquee items-center gap-20 md:gap-32 opacity-50 hover:opacity-100 transition-opacity duration-500">
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={`${partner.id}-${index}`}
                                className="grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex-shrink-0"
                            >
                                <img
                                    alt={partner.name}
                                    src={partner.src}
                                    className="h-7 md:h-9 w-auto object-contain hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

