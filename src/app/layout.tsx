import type {
  Metadata
} from "next";
import {
  ThemeProvider
} from "./context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vojta Oliva - Profesionální a cenově dostupný webový vývoj",
  description: "Vojta Oliva nabízí kvalitní a cenově dostupný webový vývoj na míru. Moderní, udržitelná řešení, která podpoří růst vašeho projektu.",
  keywords: [
    "webový vývoj",
    "webový vývoj na míru",
    "web na míru",
    "webové stránky na míru",
    "levný web",
    "moderní web",
    "moderní webové stránky",
    "profesionální web",
    "kvalitní web",
    "webová prezentace",
    "responzivní web",
    "web pro podnikatele",
    "webová tvorba",
    "web na míru",
    "web na zakázku",
    "cenově dostupný web",
    "cenově dostupný web na míru",
    "cenově dostupný webový vývoj",
    "cenově dostupné webové stránky",
    "cenově dostupné webové stránky na míru",
  ],
  openGraph: {
    title: "Vojta Oliva - Kvalitní webový vývoj na míru",
    description: "Získejte moderní a cenově dostupný web, který podpoří růst vašeho projektu. Profesionální řešení od Vojty Olivy",
    siteName: "Vojta Oliva",
    images: [
      {
        url: "/fotky/og/og-photo.jpg",
        alt: "Vojta Oliva - moderní a cenově dostupný webový vývoj na míru",
        width: 1200,
        height: 630
      }
    ],
    url: "vojtaoliva.cz",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/fotky/logo/clean logo 1.png",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="body"
      >
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}