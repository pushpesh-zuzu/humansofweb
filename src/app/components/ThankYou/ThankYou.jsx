"use client";

import React from 'react'
import { FaCheck } from "react-icons/fa";

const ThankYou = () => {

    const handleWhatsAppRedirect = () => {
        const data = JSON.parse(
            sessionStorage.getItem("whatsappData")
        );

        if (!data) return;

        const message = `New Proposal Request

        Name: ${data.name}
        Phone: ${data.phone}
        Email: ${data.email}
        Domain: ${data.domain}
        Service Interested: ${data.service}
        Monthly Budget: ${data.budget}
        About Business: ${data.about || "N/A"}

        — Humans of Web`;

        const whatsappUrl = `https://wa.me/447897024186?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappUrl, "_blank");
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7f3ff_48%,#fff1f4_100%)] px-4">
            <div className="w-full max-w-[460px] overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-[0_24px_70px_rgba(72,23,156,0.16)]">
                <div className="bg-primary p-4 text-center md:p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary md:h-16 md:w-16">
                        <FaCheck className="h-7 w-7 text-white md:h-8 md:w-8" />
                    </div>

                    <h4 className="mt-4 text-xl font-semibold text-white md:text-2xl">
                        Thank You! Your number has been verified.
                    </h4>
                </div>

                <div className="p-4 md:p-6">
                    <div className="mb-4 flex justify-center">
                        <button
                            onClick={handleWhatsAppRedirect}
                            className="flex cursor-pointer items-center gap-2.5 rounded-full bg-secondary px-6 py-3 text-sm font-bold uppercase tracking-[0.04em] text-white transition-colors duration-200 hover:bg-primary md:text-base"
                        >
                            <div className="flex h-4 w-4 items-center justify-center">
                                <FaCheck
                                    className="h-3 w-3 text-white"
                                />
                            </div>

                            <span className="font-[Arial]">
                                Continue to WhatsApp
                            </span>
                        </button>
                    </div>

                    <div>
                        <p className="text-center font-[Arial] text-[10px] leading-relaxed text-[#4b4b4b] md:text-[11px]">
                            Click the button above to continue to WhatsApp and send your enquiry details to our team.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ThankYou