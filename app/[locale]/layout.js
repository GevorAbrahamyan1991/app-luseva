import { getMessages } from "@/i18n";
import { locales } from "@/i18n/config";
import {
  Noto_Sans_Armenian,
  Noto_Serif_Armenian,
  Playfair_Display,
  Roboto,
} from "next/font/google";
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

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
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
        {children}
      </body>
    </html>
  );
}
