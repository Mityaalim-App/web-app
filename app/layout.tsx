import "./globals.css";

import { Inter } from "@next/font/google";
import { Open_Sans } from "@next/font/google";

const openSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={openSans.variable}>
        <main className="h-screen bg-white font-primary text-gray-dark font-normal sm:max-w-md mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
