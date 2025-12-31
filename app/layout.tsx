import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Sales Growth Advisor",
  description:
    "Actionable frameworks, calculators, and playbooks to help you increase revenue and accelerate sales performance.",
  openGraph: {
    title: "Sales Growth Advisor",
    description:
      "Discover actionable strategies, tools, and calculators to grow your sales pipeline and close more deals.",
    url: "https://agentic-1381258e.vercel.app",
    siteName: "Sales Growth Advisor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Growth Advisor",
    description:
      "Discover actionable strategies, tools, and calculators to grow your sales pipeline and close more deals.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-body bg-slate-950 text-slate-100 antialiased">
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {children}
        </div>
      </body>
    </html>
  );
}
