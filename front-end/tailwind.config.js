/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        tenorSans: ["Tenor Sans", "sans-serif"],
        balooChettan2: ["Baloo Chettan 2", "cursive"],
      },
    },
  },
  plugins: [],
};
