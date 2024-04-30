/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // backgroundImage: (theme) => ({
      //   'image-day':
      //     "url('https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      //   'image-night':
      //     "url('https://masterfed.com/DineIntelLogoLight.png')",
      // }),
      colors: {
        "dred": "#E31C3D",
        "dgreen": "#248540",
        "dlightblue": "#205493",
        "dblue": "#112E51",
        "dlightgreen": "#EBF3EC",
        "dyellow": "#FFC129",
        "dblack": "#1F1F1F",
        "dlightblack": "#292D32",
        "dgrey": "#A0A8B3",
        "ddarkgrey": "#545454",
        "dlightestgreen": "F5FCF8",
      },
    },
  },
  variants: {
    extend: {
      // backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
