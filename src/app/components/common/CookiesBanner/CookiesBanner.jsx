"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_KEY = "cookie_consent_accepted";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2c2c2c] text-white">
      <div className="mx-auto flex flex-col gap-2.5 md:gap-0 md:flex-row max-w-[1500px] flex-wrap items-center py-3.75 px-6 md:px-7.5 md:flex-nowrap md:gap-6">
        <p className="p-vsmall text-center flex-1 text-white">
          We use cookies on our site to provide you with the best user experience. We will assume that you are agreeing to our Privacy Policy, if you continue accessing this website
        </p>

        <div className="flex flex-shrink-0 items-center gap-3">
          <button
            onClick={handleAccept}
            className="h-9 cursor-pointer rounded-full bg-primary px-2.5 py-2 p-small text-white transition hover:bg-primary/80"
          >
            OK, I Agree
          </button>

          <Link
            href="/privacy-policy"
            className="h-9 inline-flex items-center cursor-pointer rounded-full bg-secondary px-2.5 py-2 p-small text-white transition hover:bg-secondary/80"
          >
            Privacy policy
          </Link>

          <button
            onClick={handleAccept}
            className="flex-shrink-0 text-white transition hover:text-white"
            aria-label="Close cookie banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;