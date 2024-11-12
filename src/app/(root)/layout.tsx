import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import Footer from "@/components/common/footer";
import FooterGradient from "@/components/common/footer-gradient";
import Header from "@/components/common/header";
import HeaderGradient from "@/components/common/header-gradient";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeSwitch } from "@/components/theme/theme-switch";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SanityLive } from "@/sanity/lib/live";

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
    <body className={`antialiased relative ${inter.className}`}>
      <NuqsAdapter>
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
        <SanityLive />
      </NuqsAdapter>
    </body>
  );
}
