import type { Metadata } from "next";
import { Inter } from "next/font/google";

// CSS files
import "./globals.css";
import "./media-queries.css";

// Imports
import clsx from "clsx";

// Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DesignWhiz",
  description: "Welcome to DesignWhiz, a community for designers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={clsx(
          "w-dvw min-h-screen overflow-x-hidden overflow-y-auto",
          inter.className
        )}
      >
        {children}
        <div id="dot-bg" className="fixed z-[1] inset-0 w-full h-full"></div>
      </body>
    </html>
  );
}
