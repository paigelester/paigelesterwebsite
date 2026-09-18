import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import WwwRedirect from "./_components/WwwRedirect";
import { canonicalOrigin } from "./_lib/canonicalOrigin";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: canonicalOrigin,
  title: "Paige Lester - CV",
  description:
    "The CV of Paige Lester, software developer: work experience, skills, education and links.",
  // Set here so every page shares the one canonical address.
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <WwwRedirect />
        {children}
      </body>
    </html>
  );
}
