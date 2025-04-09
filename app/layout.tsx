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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <MouseMoveEffect />
            <header>
              <FloatingDockComponent />
            </header>

            <main className="min-h-screen bg-black text-white p-4 md:p-10">
              <section>
                <Sideline />
              </section>
              {children}
            </main>

            <footer>
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
