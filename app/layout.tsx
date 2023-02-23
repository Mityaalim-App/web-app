import "./globals.css";

import { Open_Sans } from "@next/font/google";
import NavBar from "./components/navbar/NavBar";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export default function RootLayout({
  children,
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
        <main className="h-screen bg-white font-primary font-normal text-gray-dark sm:max-w-md mx-auto leading-4">
          {children}
        </main>
        <NavBar />
      </body>
    </html>
  );
}
