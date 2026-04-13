"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu({ items, open, onClose }) {
  const [openIdx, setOpenIdx] = useState(null);
  const [openSubIdx, setOpenSubIdx] = useState(null);

  const handleClose = () => {
    setOpenIdx(null);
    setOpenSubIdx(null);
    onClose();
  };

  function ToggleIcon({ expanded }) {
    return (
      <span className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-white text-primary">
        <svg
          className="h-3 w-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d={expanded ? "M5 12h14" : "M12 5v14M5 12h14"}
          />
        </svg>
      </span>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-[60] xl:hidden transition-opacity duration-300 ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
    >
      <button
        type="button"
        aria-label="Close mobile menu"
        onClick={handleClose}
        className="absolute inset-0 bg-black/45"
      />

      <div
        className={`relative flex h-full w-[88vw] max-w-[250px] flex-col bg-primary shadow-2xl transition-transform duration-300 ease-out md:max-w-[350px] ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between border-b border-white/20 px-5 py-5">
          <span className="text-base font-semibold text-white">Menu</span>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
          {items.map((item, idx) => (
            <div key={idx}>
              {item.children ? (
                <>
                  <div className="flex items-center justify-between gap-3">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={handleClose}
                        className="flex-1 py-3 text-left text-sm font-medium text-white transition-colors hover:text-[#ffd2c2]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setOpenIdx(openIdx === idx ? null : idx);
                          setOpenSubIdx(null);
                        }}
                        className="flex-1 py-3 text-left text-sm font-medium text-white transition-colors hover:text-[#ffd2c2]"
                      >
                        {item.label}
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        setOpenIdx(openIdx === idx ? null : idx);
                        setOpenSubIdx(null);
                      }}
                      className="py-3"
                      aria-label={`${openIdx === idx ? "Collapse" : "Expand"} ${item.label}`}
                    >
                      <ToggleIcon expanded={openIdx === idx} />
                    </button>
                  </div>

                  {openIdx === idx && (
                    <div className="mt-2 space-y-1 bg-black px-3 py-2">
                      {item.children.map((child, cIdx) => (
                        <div key={cIdx}>
                          {child.subItems ? (
                            <>
                              <div className="flex items-center justify-between gap-3">
                                {child.href ? (
                                  <Link
                                    href={child.href}
                                    onClick={handleClose}
                                    className="flex-1 py-2 text-left text-sm font-medium text-[#ffd2c2] transition-colors hover:text-white"
                                  >
                                    {child.label}
                                  </Link>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setOpenSubIdx(openSubIdx === cIdx ? null : cIdx)
                                    }
                                    className="flex-1 py-2 text-left text-sm font-medium text-[#ffd2c2] transition-colors hover:text-white"
                                  >
                                    {child.label}
                                  </button>
                                )}

                                <button
                                  type="button"
                                  onClick={() =>
                                    setOpenSubIdx(openSubIdx === cIdx ? null : cIdx)
                                  }
                                  className="py-2"
                                  aria-label={`${openSubIdx === cIdx ? "Collapse" : "Expand"} ${child.label}`}
                                >
                                  <ToggleIcon expanded={openSubIdx === cIdx} />
                                </button>
                              </div>

                              {openSubIdx === cIdx && (
                                <div className="mt-1 space-y-1 bg-[#3f3e3e] px-3 py-2">
                                  {child.subItems.map((sub, sIdx) => (
                                    <Link
                                      key={sIdx}
                                      href={sub.href}
                                      onClick={handleClose}
                                      className="block py-1.5 text-sm text-white/80 transition-colors hover:text-white"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={child.href ?? "#"}
                              onClick={handleClose}
                              className="block py-2 text-sm text-white/85 transition-colors hover:text-white"
                            >
                              {child.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  onClick={handleClose}
                  className="block py-3 text-sm font-medium text-white transition-colors hover:text-[#ffd2c2]"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 p-4">
          <Link
            href="#"
            className="block w-full rounded border-2 border-secondary bg-secondary px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-secondary"
          >
            GET A PROPOSAL
          </Link>
        </div>
      </div>
    </div>
  );
}
