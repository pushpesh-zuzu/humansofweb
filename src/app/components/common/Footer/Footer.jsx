import Image from "next/image";
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

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "X", href: "#", icon: FaXTwitter },
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
  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/Home/blog4.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative mx-auto max-w-[1500px] px-[4%] py-7 md:py-9 xl:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-center">
          <div>
            <div className="inline-flex rounded-full bg-white px-3 py-2">
              <Logo className="h-8 w-32 md:h-10 md:w-44" />
            </div>
            <p className="p-small mt-4 max-w-[420px] font-medium text-white/85">
              Human-first digital growth for brands that want clearer strategy, better visibility, and real customer action.
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

          <div className="lg:ml-auto lg:max-w-[720px]">
            <h2 className="text-h4 font-bold text-white">
              Know What Is Working
            </h2>
            <p className="p-default mt-3 font-semibold text-white">
              No pitch. Just real strategies we have used to grow ecommerce, SaaS, and service brands.
            </p>

            <form className="mt-5 flex w-full max-w-[320px] flex-col gap-2 md:max-w-none md:flex-row md:gap-3">
              <input
                type="url"
                placeholder="Enter Your Website Address"
                className="h-8 py-2.5 w-full min-w-0 flex-1 rounded-full border border-white/20 bg-white px-4 text-[13px] font-medium leading-none text-[#1c1c1c] outline-none transition placeholder:text-[#6b6b6b] focus:border-secondary md:h-12 md:p-small"
              />
              <button
                type="submit"
                className="h-10 w-full cursor-pointer rounded-full bg-secondary px-4 text-[12px] font-bold uppercase leading-none tracking-[0.04em] text-white transition hover:bg-white hover:text-primary md:h-12 md:w-auto md:px-6 md:p-small"
              >
                Get Your Free Proposal
              </button>
            </form>
          </div>
        </div>

        <div className="mt-7 grid gap-7 border-t border-white/20 pt-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
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

          <div className="rounded-[8px] border border-white/20 bg-white/10 p-5">
            <h3 className="text-h6 font-bold text-white">Contact</h3>
            <div className="mt-4 grid gap-4">
              {CONTACT_INFO.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Address" ? "_blank" : undefined}
                  rel={label === "Address" ? "noreferrer" : undefined}
                  className="group flex items-start gap-3 text-white/80 transition hover:text-secondary"
                >
                  <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-white text-primary transition group-hover:bg-secondary group-hover:text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="p-small block font-bold text-white">{label}</span>
                    <span className="p-small block font-medium">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/20 pt-5">
          <p className="p-small text-center text-white/65">
            Copyright 2026 Humans of Web. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
