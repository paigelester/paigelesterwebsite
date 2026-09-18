"use client";

import { useEffect, useRef, useState } from "react";
import type { Links } from "@/content/cv";
import {
  activeSection,
  contentsEntries,
  type OnScreenEntry,
  type ContentsEntryId
} from "../_lib/contents";
import LinkIcon from "./LinkIcon";
import styles from "./Contents.module.scss";

// How much of the screen below the header counts as being read, from the top.
const readingShare = 0.4;

type Props = {
  links: Links;
};

/**
 * The Contents side menu, with the Links under it. It highlights the entry for
 * the section being read, and below the tablet breakpoint becomes a scrolling
 * bar under the header.
 */
export default function Contents({ links }: Props) {
  const navRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<ContentsEntryId>("intro");

  // Shares the sticky header's and this menu's heights with the stylesheets,
  // which place the menu bar under the header and keep sections clear of both.
  useEffect(() => {
    const nav = navRef.current;
    const header = nav?.closest("[data-site]")?.querySelector("header");
    if (!nav || !header) {
      return;
    }
    const root = document.documentElement.style;
    const observer = new ResizeObserver(() => {
      root.setProperty("--site-header-height", `${header.offsetHeight}px`);
      root.setProperty("--contents-height", `${nav.offsetHeight}px`);
    });
    observer.observe(header);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = contentsEntries.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [{ id, element }] : [];
    });
    let frame = 0;

    const update = () => {
      frame = 0;
      if (sections.length === 0) {
        return;
      }
      // A section's scroll margin is how much of the screen the sticky header
      // and menu bar cover, so the part below it is what's being read.
      const covered = parseFloat(
        getComputedStyle(sections[0].element).scrollMarginTop
      );
      const readingBottom = covered + (innerHeight - covered) * readingShare;
      const onScreen: OnScreenEntry[] = [];
      for (const { id, element } of sections) {
        const { top, bottom } = element.getBoundingClientRect();
        // Rounded, as a section scrolled to lands on the edge within a pixel.
        if (Math.round(bottom) > Math.round(covered) && top < readingBottom) {
          onScreen.push({ id, top });
        }
      }
      setActive(activeSection(onScreen));
    };
    const scheduleUpdate = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    addEventListener("scroll", scheduleUpdate, { passive: true });
    addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", scheduleUpdate);
      removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const profileLinks = links.profiles.filter(
    (link) => !link.url.startsWith("mailto:")
  );

  return (
    <nav
      ref={navRef}
      className={styles.contents}
      aria-labelledby="contents-title"
    >
      <div className={styles.inner}>
        {/* Not a heading, so the Intro's name stays the page's first. */}
        <div id="contents-title" className={styles.title}>
          Contents
        </div>
        <ol className={styles.entries}>
          {contentsEntries.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={styles.entry}
                aria-current={id === active ? "location" : undefined}
              >
                <span className={styles.line} aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ol>
        {/* Phones show the Links in Contact instead. */}
        <ul className={styles.links}>
          {profileLinks.map((link) => (
            <li key={link.url}>
              <a href={link.url} className={styles.link}>
                <LinkIcon link={link} />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
