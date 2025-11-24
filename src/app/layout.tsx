import type {
  Metadata
} from "next";
import {
  ThemeProvider
} from "./context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  // title: "New Web - Cenově dostupný webový vývoj",
  // description: "New Web - Cenově dostupný webový vývoj",
  title: "Vojta Oliva - Cenově dostupný webový vývoj",
  description: "Vojta Oliva - poskytuje velmi cenově výhodný webový vývoj, který má kvalitu, udržitelnost a hlavně budoucnost.",
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