import type { Metadata } from "next";
import "./globals.css";
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
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
