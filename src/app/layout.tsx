import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Web - Cenově dostupný webový vývoj",
  description: "New Web - Cenově dostupný webový vývoj",
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