import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SavedTheme from "./_components/SavedTheme";
import WwwRedirect from "./_components/WwwRedirect";
import { canonicalOrigin } from "./_lib/canonicalOrigin";
import { applySavedThemeScript, decideTheme } from "./_lib/theme";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const title = "Paige Lester - CV";
const description =
  "The CV of Paige Lester, engineering manager and software developer: work experience, skills, education and links.";

export const metadata: Metadata = {
  metadataBase: canonicalOrigin,
  title,
  description,
  // Set here so every page shares the one canonical address.
  alternates: { canonical: "/" },
  // The image comes from the opengraph-image.png file convention.
  openGraph: { type: "website", url: "/", title, description }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The inline script may change data-theme before React hydrates.
    <html
      lang="en"
      data-theme={decideTheme(null)}
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: applySavedThemeScript }} />
      </head>
      <body>
        <SavedTheme />
        <WwwRedirect />
        {children}
      </body>
    </html>
  );
}
