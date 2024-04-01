import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MyProvider from "@/context/ListProvider";
import { Nav } from "@/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIFA WORLD CUP",
  description: "Copa mundial de clubes",
  icons: {
    icon: "favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MyProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
          </body>
      </html>
    </MyProvider>
  );
}
