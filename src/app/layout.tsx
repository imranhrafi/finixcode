import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarDesktop from "./navbar/navbar-desktop";
import NavbarMobile from "./navbar/navbar-mobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finixcode Assignment - Football",
  description: "Finixcode Assignment - Football",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/logo.svg' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Responsive Navbar */}
        <div>
          <div className='hidden md:block'>
            <NavbarDesktop />
          </div>
          <div className='block md:hidden'>
            <NavbarMobile />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
