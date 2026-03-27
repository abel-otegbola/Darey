import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Topbar from "@/components/topbar/topbar";
import NextTopLoader from "nextjs-toploader";
import StoreContextProvider from "@/context/useStore";
import AuthProvider from "@/context/useAuth";

const outift = Outfit({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: "D A R E Y",
  description: "Best website to buy new and used Iphones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outift.className} antialiased 2xl:text-[16px] xl:text-[15px] text-[14px] text-black md:mt-0`}
      >
        <AuthProvider>
        <StoreContextProvider>
          <NextTopLoader />
          <Topbar />
          {children}
          <Footer />
        </StoreContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
