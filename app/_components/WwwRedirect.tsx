"use client";

import { useEffect } from "react";
import { wwwRedirectTarget } from "../_lib/wwwRedirectTarget";

/**
 * Client-side fallback that moves visitors from www to the bare domain,
 * because App Engine static handlers cannot redirect by host.
 */
export default function WwwRedirect() {
  useEffect(() => {
    const target = wwwRedirectTarget(window.location);
    if (target) {
      window.location.replace(target);
    }
  }, []);

  return null;
}
