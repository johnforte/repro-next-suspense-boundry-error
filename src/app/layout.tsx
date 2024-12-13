"use client";

import "./globals.css";
import {SearchFilter} from "./components/searchFilter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  SearchFilter();
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
