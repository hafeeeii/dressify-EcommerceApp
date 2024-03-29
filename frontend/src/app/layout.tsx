import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StoreProvider } from "@/store/StoreProvider";
import { Toaster } from "react-hot-toast";
import SideMenu from "@/components/SideMenu";
import TopBar from "@/components/TopBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dressify",
  description: "Dressify is a E-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-black relative min-h-screen w-[100vw] overflow-x-hidden  sm:pr-[1rem] `}
      >
        <StoreProvider>
          <TopBar />
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <div>{children}</div>
          <Toaster />
          <Footer />
          <div className=" bottom-[20%] right-1  fixed z-10">
            <SideMenu />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
