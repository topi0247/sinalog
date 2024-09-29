import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import { ReactNode } from "react";

import AppProvider from "@/providers";

export const metadata: Metadata = {
  title: "シナログ",
  description: "シナリオ記録帳",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
