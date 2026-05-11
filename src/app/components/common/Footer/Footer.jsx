"use client"

import { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import NAV_ITEMS from "../Header/navData";
import Logo from "../Icons/Home/Logo";
import GetProposalModal from "../GetProposalModal/GetProposalModal";
import PaddingWrapper2 from "../Container/PaddingWrapper2";

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

console.log("getFooterLinks", getFooterLinks)

const CONTACT_INFO = [
  {
    label: "Address",
    value: "United Kingdom • Dubai • India",
    href: "https://www.google.com/maps/search/?api=1&query=United+Kingdom+Dubai+India",
    icon: FaLocationDot,
  },
  {
    label: "Email",
    value: "hello@humansofweb.com",
    href: "mailto:hello@humansofweb.com",
    icon: FaEnvelope,
  },
  {
    label: "WhatsApp",
    value: "+44 7897 024186",
    href: "https://wa.me/447897024186",
    icon: FaWhatsapp,
  },
];

const Footer = () => {
  const [proposalOpen, setProposalOpen] = useState(false);
  const [phone, setPhone] = useState("");

  return (
    <footer className="bg-white">
      <PaddingWrapper2 padding=" px-8.75 md:px-12.5 xl:px-20">
      <div className="mx-auto ">
        <div className="grid overflow-hidden rounded-t-[14px] bg-[#eaf7ff] text-primary lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative grid  gap-5 p-5 text-center md:grid-cols-3 md:p-4 lg:text-left">
            {STATS.map((stat) => (
              <div key={stat.value}  className="border-primary/15 md:border-r md:last:border-r-0 md:pr-5">
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
                href="https://wa.me/447897024186"
                className="inline-flex items-center gap-3 text-h5 font-bold text-secondary transition hover:text-primary lg:whitespace-nowrap"
              >
                <FaWhatsapp className="h-6 w-6 text-[#25D366] group-hover:text-[#25D366]" />
                +44 7897 024186
              </a>
            </div>
          </div>
        </div>
      </div>
      </PaddingWrapper2>

      <div className="mt-0 bg-primary text-white">
        <div className="mx-auto grid max-w-[1500px] gap-6 px-[4%] py-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center">
          <div className="md:self-center">
            <h2 className="text-h5 font-bold text-white">
              Still Thinking? Connect With US.
            </h2>
          </div>

          <div className="md:ml-auto md:max-w-[720px] md:self-center">
            <p className="p-small mt-3 font-bold text-white">
              No pitch. Just real strategies we have used to grow ecommerce, SaaS, and more.
            </p>

            <form className="mt-4 flex w-full max-w-[320px] flex-col gap-3 md:max-w-none md:flex-row">
              {/* PhoneInput styled to match the original rounded-full input */}
              <div className="h-12 flex-1 [&_.react-tel-input]:h-full [&_.react-tel-input_.form-control]:!h-full [&_.react-tel-input_.form-control]:!w-full [&_.react-tel-input_.form-control]:!rounded-full [&_.react-tel-input_.form-control]:!border [&_.react-tel-input_.form-control]:!border-white [&_.react-tel-input_.form-control]:!bg-white [&_.react-tel-input_.form-control]:!pl-14 [&_.react-tel-input_.form-control]:!pr-4 [&_.react-tel-input_.form-control]:!text-sm [&_.react-tel-input_.form-control]:!font-medium [&_.react-tel-input_.form-control]:!text-[#1c1c1c] [&_.react-tel-input_.form-control]:!outline-none [&_.react-tel-input_.form-control]:placeholder:!text-[#6b6b6b] [&_.react-tel-input_.form-control:focus]:!border-secondary [&_.react-tel-input_.flag-dropdown]:!rounded-l-full [&_.react-tel-input_.flag-dropdown]:!border [&_.react-tel-input_.flag-dropdown]:!border-white [&_.react-tel-input_.flag-dropdown]:!bg-white [&_.react-tel-input_.flag-dropdown]:!px-2 [&_.react-tel-input_.flag-dropdown.open]:!rounded-l-full [&_.react-tel-input_.selected-flag]:!rounded-l-full [&_.react-tel-input_.selected-flag]:!pl-3 [&_.react-tel-input_.country-list]:!bg-white [&_.react-tel-input_.country-list]:!text-[#48179C] [&_.react-tel-input_.country-list_.country-name]:!text-[#48179C] [&_.react-tel-input_.country-list_.dial-code]:!text-[#48179C] [&_.react-tel-input_.country-list_.country:hover]:!bg-[#eaf7ff] [&_.react-tel-input_.country-list_.country.highlight]:!bg-[#eaf7ff] [&_.react-tel-input_.country-list_.search]:!bg-white [&_.react-tel-input_.country-list_.search-box]:!text-[#48179C] [&_.react-tel-input_.country-list_.search-box]:!border-[#48179C]/30 [&_.react-tel-input_.country-list_.search-box]:placeholder:!text-[#48179C]/50 [&_.react-tel-input_.country-list_.search-box]:!outline-none [&_.react-tel-input_.country-list_.no-entries-message]:!text-[#48179C]">
                <PhoneInput
                  country="gb"
                  value={phone}
                  onChange={(val) => setPhone(val)}
                  placeholder="Enter your WhatsApp Number"
                  enableSearch
                  inputClass="h-12"
                  containerClass="h-full w-full"
                />
              </div>

              <button
                type="button"
                onClick={() => setProposalOpen(true)}
                className="h-12 w-full cursor-pointer rounded-full bg-secondary px-5 p-small font-bold uppercase tracking-[0.04em] text-white transition hover:bg-white hover:text-primary md:w-auto"
              >
                Chat With Us On Whatsapp
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
              <Icon
                className={`flex-none transition ${label === "WhatsApp"
                  ? "h-6 w-6 text-[#25D366] group-hover:text-[#25D366]"
                  : "h-5 w-5 text-primary group-hover:text-secondary"
                  }`}
              />
              <span>{value}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-primary text-white">
        <div className="mx-auto max-w-[1500px] px-[4%] py-7 md:py-9 xl:py-10">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)]">
            <div>
              <div className="inline-flex rounded-full bg-white px-3 py-2">
                <Logo className="h-8 w-32 md:h-10 md:w-44 lg:w-38" />
              </div>
            </div>


            <div className="grid grid-cols-2 gap-6 md:gap-20 xl:gap-20 md:grid-cols-3">
              {visibleNavItems.map((item) => (
                <div
                  key={item.label}
                  className={item.label === "Industry Expertise" ? "lg:-ml-4 xl:-ml-14" : ""}
                >
                  <h3 className={`p-default font-bold text-white ${item.label === "Industry Expertise" ? "text-left" : ""
                    }`}>{item.label}</h3>
                    <div className={`mt-3 ${item.label === "Industry Expertise"
                      ? "grid gap-y-3 text-left sm:grid-cols-2 sm:gap-x-10"
                      : "grid gap-3"
                    }`}>
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
              © 2026 Humans of Web. All rights reserved.
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