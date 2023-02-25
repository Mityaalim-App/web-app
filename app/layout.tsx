import "./globals.css";

import { Open_Sans } from "@next/font/google";

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
        <main className="h-screen bg-white font-normal text-gray-dark sm:max-w-md mx-auto leading-4">
          {children}
        </main>
      </body>
    </html>
  );
}
