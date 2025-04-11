import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingDockComponent from "@/components/navbar";
import Sideline from "@/components/sideline";
import Footer from "@/components/footer";
import MouseMoveEffect from "@/components/mouse-move-effect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek",
  description: "Abhishek portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <MouseMoveEffect />
          <header>
            <FloatingDockComponent />
          </header>

          <main className="relative min-h-screen bg-black text-white p-4 md:p-10 overflow-hidden">
            {/* Mobile Blur Overlay */}
            <div className="absolute inset-0 bg-blue-500/30 backdrop-blur-sm sm:backdrop-blur-0 sm:bg-transparent z-0" />

            <section className="relative z-10">
              <Sideline />
            </section>

            <div className="relative z-10">{children}</div>
          </main>

          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
