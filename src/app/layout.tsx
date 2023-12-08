import LayoutClient from "@/components/layout";
import MainProvider from "@/providers/Providers";
import type { Metadata } from "next";

import { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DreamChat",
  description: "DreamChain private chat",
  icons: "/logo.svg",
};

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainProvider>
          <LayoutClient>{children}</LayoutClient>
        </MainProvider>
      </body>
    </html>
  );
}
