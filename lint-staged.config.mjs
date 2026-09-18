// Globs must not overlap: lint-staged runs each glob's tasks concurrently, so
// two globs editing the same file would race.
const lintableFiles = "*.{js,mjs,cjs,jsx,ts,tsx}";

/** @type {import("lint-staged").Configuration} */
const lintStagedConfig = {
  [lintableFiles]: ["eslint --fix", "prettier --write"],
  [`!(${lintableFiles})`]: "prettier --write --ignore-unknown"
};

export default lintStagedConfig;
