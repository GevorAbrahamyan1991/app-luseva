// Packages
import {
  Noto_Sans_Armenian,
  Noto_Serif_Armenian,
  Playfair_Display,
  Roboto,
} from "next/font/google";

// Components
import Header from "@/components/layout/Header";
import Providers from "./providers";

// Multilanguage
import { getMessages } from "@/i18n";
import { locales } from "@/i18n/config";

// Styles
import Footer from "@/components/layout/Footer";
import "./globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// --- FONTS ---
const playfair_display = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
  variable: "--link-font",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const noto_serif_armenian = Noto_Serif_Armenian({
  display: "swap",
  subsets: ["latin"],
  variable: "--armenian-link-font",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const noto_sans_armenian = Noto_Sans_Armenian({
  display: "swap",
  subsets: ["latin"],
  variable: "--armenian-text-font",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  variable: "--text-font",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  const baseUrl = "https://lusevackaes.am";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: messages.metadata.title,
      template: `%s | ${messages.metadata.title}`,
    },
    description: messages.metadata.description,
    openGraph: {
      title: messages.metadata.title,
      description: messages.metadata.description,
      url: baseUrl,
      siteName: messages.metadata.title,
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.title,
      description: messages.metadata.description,
    },
    alternates: {
      canonical: "./",
      languages: {
        en: "/en",
        ru: "/ru",
        am: "/am",
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        { url: "/icon0.svg", type: "image/svg+xml" },
        { url: "/icon1.png", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", type: "image/png" }],
    },
    manifest: "/manifest.json",
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body
        className={`${playfair_display.variable} ${noto_sans_armenian.variable} ${noto_serif_armenian.variable} ${roboto.variable} antialiased`}
      >
        <Providers>
          <Header
            messages={messages}
            locale={locale}
          />
          {children}
          <Footer
            messages={messages}
            locale={locale}
          />
        </Providers>
      </body>
    </html>
  );
}
