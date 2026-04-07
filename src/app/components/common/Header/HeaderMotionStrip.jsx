"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeaderMotionStrip() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative w-full border-b border-primary/10 bg-[#fffaf6]">
      <div className="mx-auto flex min-h-10 max-w-[1500px] items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-7">
        <p className="p-small min-w-0 flex-1 truncate font-semibold text-[#4b2a24]">
          Want to see where your growth is leaking? Get a quick strategy review.
        </p>

        <div className="flex flex-none items-center gap-2">
          <Link
            href="#"
            className="rounded-full bg-primary px-4 py-2 text-[11px] font-bold uppercase leading-none tracking-[0.04em] text-white transition hover:bg-secondary"
          >
            Click Here
          </Link>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Close announcement"
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-sm font-bold text-[#5a2f28] transition hover:bg-primary/10 hover:text-primary"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
}
