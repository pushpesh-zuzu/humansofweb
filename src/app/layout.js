import { Montserrat } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "./components/common/Header/Header";
import FloatingBalls from "./components/common/Decor/FloatingBalls";
// import ProposalModal from "./components/auth/ProposalModal";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boost Your SaaS & eCommerce Growth | How Digital Marketing Experts",
  description:
    "A trusted digital marketing agency in San Jose, How offer bespoke digital marketing services that turn website visitors into paying customers. Call us now!",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning className="relative overflow-x-hidden">
        <FloatingBalls />
        <div className="relative z-10">
          <Header />
          <StoreProvider>{children}</StoreProvider>
          {/* <ProposalModal isOpen={true}/> */}
        </div>
      </body>
    </html>
  );
}
