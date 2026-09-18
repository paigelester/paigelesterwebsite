import { describe, expect, test } from "vitest";
import { wwwRedirectTarget } from "./wwwRedirectTarget";

describe("wwwRedirectTarget", () => {
  test("sends the www host to the same path on the bare domain", () => {
    expect(
      wwwRedirectTarget(new URL("https://www.paigelester.co.uk/cv/"))
    ).toBe("https://paigelester.co.uk/cv/");
  });

  test("keeps the query string and fragment", () => {
    expect(
      wwwRedirectTarget(
        new URL("https://www.paigelester.co.uk/?ref=linkedin#skills")
      )
    ).toBe("https://paigelester.co.uk/?ref=linkedin#skills");
  });

  test("upgrades plain http on the www host to https", () => {
    expect(wwwRedirectTarget(new URL("http://www.paigelester.co.uk/"))).toBe(
      "https://paigelester.co.uk/"
    );
  });

  test("treats the fully qualified www host, with its trailing dot, as www", () => {
    expect(wwwRedirectTarget(new URL("https://www.paigelester.co.uk./"))).toBe(
      "https://paigelester.co.uk/"
    );
  });

  test("keeps a path that starts with two slashes on the bare domain", () => {
    expect(
      wwwRedirectTarget(new URL("https://www.paigelester.co.uk//evil.example/"))
    ).toBe("https://paigelester.co.uk//evil.example/");
  });

  test.each([
    "https://paigelester.co.uk/",
    "http://localhost:3000/",
    "https://paigelester-website.nw.r.appspot.com/",
    "https://20260918t120000-dot-paigelester-website.nw.r.appspot.com/"
  ])("does not redirect %s", (href) => {
    expect(wwwRedirectTarget(new URL(href))).toBeNull();
  });
});
