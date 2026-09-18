import { DM_Mono, Instrument_Sans } from "next/font/google";
import type { ReactNode } from "react";
import styles from "./SitePage.module.scss";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"]
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"]
});

type Props = {
  children: ReactNode;
};

/**
 * The themed backdrop for the site's own pages: colours, fonts and the dotted
 * background. The PDF page is not wrapped in it, so its look stays fixed.
 */
export default function SitePage({ children }: Props) {
  return (
    <div
      className={`${styles.page} ${instrumentSans.variable} ${dmMono.variable}`}
      data-site
    >
      {children}
    </div>
  );
}
