import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // title: "New Web - Cenově dostupný webový vývoj",
  // description: "New Web - Cenově dostupný webový vývoj",
  title: "Vojta Oliva - Cenově dostupný webový vývoj",
  description: "Vojta Oliva - poskytuje velmi cenově výhodný webový vývoj s budoucností.",
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
        {children}
      </body>
    </html>
  );
}