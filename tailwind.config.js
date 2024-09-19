/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/contactUs/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        geistBold: "ver(--font-geist-bold)",
        geistMedium: "var(--font-geist-medium)",
        geistRegular: "var(--font-geist-regular)",
        geistSemiBold: "var(--font-geist-semibold)",
      },
    },
  },
  plugins: [],
};
