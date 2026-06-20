import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Оптимизация шрифта через next/font: self-hosting, без layout shift.
const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Подбор специалистов для e-commerce и маркетплейсов — " + site.name,
    template: "%s — " + site.name,
  },
  description: site.description,
  keywords: [
    "подбор персонала e-commerce",
    "рекрутинг маркетплейсы",
    "найм специалистов",
    "HR-агентство",
    "подбор менеджеров маркетплейсов",
    "performance-маркетолог",
  ],
  authors: [{ name: site.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title:
      "Подбираем сильных специалистов для e-commerce и маркетплейсов",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Подбираем сильных специалистов для e-commerce и маркетплейсов",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FBFAF7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={sans.variable}>
      <body className="bg-paper font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
