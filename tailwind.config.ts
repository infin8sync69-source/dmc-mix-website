import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: {"dmc-green":"#4e8b2e","dmc-green-dark":"#3a6a21","dmc-green-light":"#6aaa45","dmc-green-pale":"#e8f4e0","dmc-black":"#1a1a1a","dmc-gray":"#f5f5f5"}, fontFamily: { sans: ["Inter","system-ui","sans-serif"] } } },
  plugins: [],
};
export default config;
