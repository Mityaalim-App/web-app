"use client";
import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";

import { Open_Sans } from "@next/font/google";
import { ToastrWrapper } from "./components/ToastrWrapper";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={openSans.className}>
        <ToastrWrapper />
        <main className="h-screen bg-white font-normal text-gray-dark sm:max-w-md mx-auto leading-4">
          {children}
        </main>
      </body>
    </html>
  );
}
