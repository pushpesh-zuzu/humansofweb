"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const HIDDEN_FOOTER_PATHS = ["/thank-you"];

const ConditionalFooter = () => {
  const pathname = usePathname();

  if (HIDDEN_FOOTER_PATHS.includes(pathname)) {
    return null;
  }

  return <Footer />;
};

export default ConditionalFooter;
