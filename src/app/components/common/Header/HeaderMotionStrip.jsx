"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeaderMotionStrip() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      setDismissed(true);
    }, 500);
  };

  return (
    <div
      className={`relative w-full overflow-hidden border-b border-primary/10 bg-[linear-gradient(90deg,#48179C_0%,#F65A75_100%)] text-white transition-all duration-500 ease-out ${
        visible ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div
        className={`mx-auto grid min-h-11 max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 transition-transform duration-500 ease-out sm:grid-cols-[1fr_auto_1fr] sm:gap-3 sm:px-6 lg:px-7 ${
          visible ? "translate-y-0 py-2" : "-translate-y-full py-0"
        }`}
      >
        <div className="hidden sm:block" />

        <div className="flex min-w-0 items-center justify-start gap-2 sm:justify-center sm:gap-3">
          <p className="block min-w-0 truncate text-[10px] font-semibold leading-4 text-white sm:hidden">
            Get a free growth audit for your website
          </p>
          <p className="hidden min-w-0 truncate text-[10px] font-semibold leading-4 text-white sm:block sm:p-small">
            Get a free growth audit for your website →
          </p>

          <Link
            href="#"
            className="flex h-7 flex-none items-center rounded-full bg-secondary px-3 text-[10px] font-bold uppercase leading-none tracking-[0.04em] text-white transition hover:bg-white hover:text-primary sm:h-8 sm:px-4 sm:text-[11px]"
          >
            Click Here
          </Link>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close announcement"
            className="flex h-7 w-7 cursor-pointer items-center justify-center text-sm font-bold text-white transition hover:text-primary"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}
