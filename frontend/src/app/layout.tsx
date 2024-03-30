// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { FloatingNav } from "@/components/ui/floating-navbar";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  // manifest: "./manifest.json",
  title: "ByteWave",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      

    <html lang="en" className="">
      <body className={inter.className}>
      
      
        
        <Toaster />
          {children}
      </body>
    </html>

  );
}