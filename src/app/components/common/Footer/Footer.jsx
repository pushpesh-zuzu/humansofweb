"use client"

import { useState } from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import NAV_ITEMS from "../Header/navData";
import Logo from "../Icons/Home/Logo";
import GetProposalModal from "../GetProposalModal/GetProposalModal";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "X", href: "#", icon: FaXTwitter },
];

const STATS = [
  { value: "1.6 Million", label: "Hours Of Expertise" },
  { value: "250+", label: "Digital Marketing Masters On Staff" },
  { value: "1128", label: "Websites Launched" },
];

const visibleNavItems = NAV_ITEMS.filter((item) => item.label !== "Home");
const getFooterLinks = (item) => {
  if (!item.children) return [{ label: item.label, href: item.href }];

  return item.children.map((child) => ({
    label: child.label,
    href: child.href ?? child.subItems?.[0]?.href ?? "#",
  }));
};

const CONTACT_INFO = [
  {
    label: "Address",
    value: "India",
    href: "https://www.google.com/maps/search/?api=1&query=India",
    icon: FaLocationDot,
  },
  {
    label: "Email",
    value: "hello@humansofweb.com",
    href: "mailto:hello@humansofweb.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+91 88888 88888",
    href: "tel:+918888888888",
    icon: FaPhone,
  },
];

const Footer = () => {
  const [proposalOpen, setProposalOpen] = useState(false);

  return (
    <footer className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-13">
        <div className="grid overflow-hidden rounded-t-[14px] bg-[#eaf7ff] text-primary lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
          <div className="relative grid gap-5 p-5 text-center md:grid-cols-3 md:p-4 lg:text-left">
            {STATS.map((stat) => (
              <div key={stat.value} className="border-primary/15 md:border-r md:last:border-r-0 md:pr-5">
                <p className="text-h5 font-bold leading-none text-primary">{stat.value}</p>
                <p className="text-xs mt-1 font-medium text-primary">{stat.label}</p>
              </div>
            ))}
            <div className="pointer-events-none absolute right-[-34px] top-0 hidden h-full w-[70px] bg-[#fff0e8] lg:block [clip-path:polygon(38%_0,100%_0,62%_100%,0_100%)]" />
          </div>
          <div className="bg-[#fff0e8] p-5 text-center md:p-7 lg:text-left">
            <div className="flex flex-col items-center gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <p className="p-default font-semibold text-secondary lg:whitespace-nowrap">
                Ready To Speak With A Marketing Expert?
              </p>
              <a
                href="tel:+918888888888"
                className="inline-flex items-center gap-3 text-h5 font-bold text-secondary transition hover:text-primary lg:whitespace-nowrap"
              >
                <FaPhone className="h-4 w-4 text-primary" />
                +91 88888 88888
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 bg-primary text-white">
        <div className="mx-auto grid max-w-[1500px] gap-6 px-[4%] py-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
          <div className="md:self-center">
            <div className="inline-flex rounded-full bg-white px-3 py-2">
              <Logo className="h-8 w-32 md:h-10 md:w-44" />
            </div>
          </div>

          <div className="md:ml-auto md:max-w-[720px] md:self-center">
            <h2 className="text-h5 font-bold text-white">
              Still Thinking? Let Us Show You What Is Working
            </h2>
            <p className="p-small mt-3 font-bold text-white">
              No pitch. Just real strategies we have used to grow ecommerce, SaaS, and more.
            </p>

            <form className="mt-4 flex w-full max-w-[320px] flex-col gap-3 md:max-w-none md:flex-row">
              <input
                type="url"
                placeholder="Enter website address"
                className="h-12 w-full py-3.5 md:py-0 min-w-0 flex-1 rounded-full border border-white bg-white px-4 p-small font-medium text-[#1c1c1c] outline-none transition placeholder:text-[#6b6b6b] focus:border-secondary"
              />
              <button
                type="button"
                onClick={() => setProposalOpen(true)}
                className="h-12 w-full cursor-pointer rounded-full bg-secondary px-5 p-small font-bold uppercase tracking-[0.04em] text-white transition hover:bg-white hover:text-primary md:w-auto"
              >
                Get Your Free Proposal
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white text-primary">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-[4%] py-5 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-8">
          {CONTACT_INFO.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Address" ? "_blank" : undefined}
              rel={label === "Address" ? "noreferrer" : undefined}
              className="group flex items-center gap-3 text-h6 font-medium text-primary transition hover:text-secondary"
            >
              <Icon className="h-5 w-5 flex-none text-primary transition group-hover:text-secondary" />
              <span>{value}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="mx-auto max-w-[1500px] px-[4%] py-7 md:py-9 xl:py-10">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div>
              <p className="p-small max-w-[420px] font-medium text-white">
                We Are A Value-Driven Marketing Agency Working Exclusively For Ecomm, SaaS And More.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition hover:bg-secondary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {visibleNavItems.map((item) => (
                <div key={item.label}>
                  <h3 className="p-default font-bold text-white">{item.label}</h3>
                  <div className="mt-3 grid gap-2">
                    {getFooterLinks(item).map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="p-small text-white/75 transition hover:text-secondary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-white/20 pt-5">
            <p className="p-small text-center text-white/65">
              Copyright 2026 Humans of Web. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <GetProposalModal
        isOpen={proposalOpen}
        onClose={() => setProposalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
