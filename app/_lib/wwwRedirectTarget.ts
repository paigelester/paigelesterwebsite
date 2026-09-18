import { canonicalOrigin } from "./canonicalOrigin";

const wwwHostname = `www.${canonicalOrigin.hostname}`;

type PageLocation = Pick<URL, "hostname" | "pathname" | "search" | "hash">;

/**
 * Where to send a visitor who is on the www host: the same path, query and
 * fragment on the canonical bare domain. Null on any other host, including
 * the bare domain itself, localhost and App Engine preview URLs.
 */
export function wwwRedirectTarget({
  hostname,
  pathname,
  search,
  hash
}: PageLocation): string | null {
  // A fully qualified host keeps its trailing dot, e.g. "www.paigelester.co.uk.".
  if (hostname.replace(/\.$/, "") !== wwwHostname) {
    return null;
  }
  // Concatenated rather than resolved with new URL(), so a path such as
  // "//elsewhere.example" can't turn into a different host.
  return `${canonicalOrigin.origin}${pathname}${search}${hash}`;
}
