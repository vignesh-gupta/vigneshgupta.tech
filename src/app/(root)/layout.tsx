import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeSwitch } from "@/components/theme/theme-switch";
import HeaderGradient from "@/components/common/header-gradient";
import Footer from "@/components/common/footer";
import FooterGradient from "@/components/common/footer-gradient";
import Header from "@/components/common/header";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased relative ${inter.className}`}>
        <HeaderGradient />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider>
            <Header />
            <ThemeSwitch className="fixed bottom-10 left-10 z-10" />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <FooterGradient />
      </body>
    </html>
  );
}