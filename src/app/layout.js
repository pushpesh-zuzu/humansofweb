import { Montserrat } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "./components/common/Header/Header";
import ConditionalFooter from "./components/common/Footer/ConditionalFooter";
import CookieBanner from "./components/common/CookiesBanner/CookiesBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boost Your SaaS & eCommerce Growth | How Digital Marketing Experts",
  description:
    "A trusted digital marketing agency in San Jose, How offer bespoke digital marketing services that turn website visitors into paying customers. Call us now!",
  icons: {
    icon: "/LogoIcon.svg",
    shortcut: "/LogoIcon.svg",
  },
  openGraph: {
    title: "Boost Your SaaS & eCommerce Growth | How Digital Marketing Experts",
    description:
      "A trusted digital marketing agency in San Jose, How offer bespoke digital marketing services that turn website visitors into paying customers. Call us now!",
    url: "https://how.com",
    siteName: "How Digital Marketing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How Digital Marketing Agency",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boost Your SaaS & eCommerce Growth | How Digital Marketing Experts",
    description:
      "A trusted digital marketing agency in San Jose, How offer bespoke digital marketing services that turn website visitors into paying customers. Call us now!",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://how.com"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/LogoIcon.svg" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning className="relative overflow-x-hidden">
        <div className="relative z-10 flex min-h-svh flex-col">
          <StoreProvider>
            <Header />
            <main className="flex min-h-0 flex-1 flex-col">
              {children}
            </main>
            <ConditionalFooter />
          </StoreProvider>
        </div>
        <CookieBanner/>
      </body>
    </html>
  );
}
