/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        'epc': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'about': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'lg': '950px',
        // => @media (min-width: 950px) { ... }
        'lgmd': '1150px',
        // => @media (min-width: 1150px) { ... }
        'lgbox': '1380px',
        // => @media (min-width: 1380px) { ... }
        'lgxl': '1800px',
        // => @media (min-width: 1800px) { ... }
      },
      backgroundImage: {
        'lightbg': "url('/LightThemeBg.png')",
        'darkbg': "url('/DarkThemeBg.png')",
        'aboutbg': "url('/aboutus.png')",
      },
      fontFamily: {
        heading: ["var(--font-poppins-big)"],
        regular: ["var(--font-poppins-regular)"],
        dine: ["var(--font-merriweather-regular)"],
      },
      colors: {
        "dred": "#E31C3D",
        "dgreen": "#44A358",
        "dgreenw": "#248540",
        "dblack": "#171717",
        "dlightblue": "#205493",
        "dblue": "#173A65",
        "dbluew": "#112E51",
        "dlightgreen": "#EBF3EC",
        "dyellow": "#FFC129",
        "dlightblack": "#2B302D",
        "dgrey": "#A0A8B3",
        "ddarkgrey": "#6D6D6D",
        "dlightestgreen": "#F5FCF8",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
