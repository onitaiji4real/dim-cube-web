import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { DockNav } from "@/components/layout/dock-nav";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dimension Cube | 維度立方科技 - SEO & GEO Agency",
  description: "Dimension Cube specializes in SEO and Generative Engine Optimization (GEO) to help your brand dominate search results from Google to ChatGPT.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Ensure locale is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!['en', 'zh-TW'].includes(locale as any)) {
      notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
            <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            >
                {/* Main Content Area */}
                <div className="flex-grow">
                    {children}
                </div>
                
                {/* Core Navigation & Footer */}
                <DockNav />
                <Footer />
                <Toaster />
            </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
