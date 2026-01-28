/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
  plugins: [
    "prettier-plugin-packagejson",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
  quoteProps: "consistent",
  singleAttributePerLine: true,
};

export default config;
