import React from 'react'
import { Inter } from "next/font/google";
import Link from "next/link";
import "../../src/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Company Profile",
  description: "Company Profile, Pempek RR",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <main> {children}</main>
      
         <Link href={"/"}>
         </Link>
         
        </body>
    </html>
  );
}
