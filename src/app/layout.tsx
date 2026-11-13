import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeLangProvider } from "../components/LanguageThemeContext";
import Navbar from "../components/ui/Navbar";
import BottomNav from "../components/ui/BottomNav"; // <--- Import BottomNav
import Footer from "../components/ui/Footer";
import AOSInit from "../components/ui/AOSInit";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RCELL NEW ERA - IT Solutions & Event Management",
  description: "Solusi IT profesional dan manajemen event berskala besar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeLangProvider>
          <AOSInit />
          <Navbar />
          
          <main className="pb-20 md:pb-0">{children}</main> {/* Tambah padding bawah agar konten tidak tertutup bar */}
          
          <BottomNav /> {/* <--- Muncul otomatis di HP */}
          <Footer />
        </ThemeLangProvider>
      </body>
    </html>
  );
}