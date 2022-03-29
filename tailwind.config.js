module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins, sans-serif",
        kaushan: "Kaushan, cursive",
      },
      colors: {
        browny: {
          50: "#FCF7ED",
          100: "#E5E5E5",
          150: "#F5EEE5",
          200: "#D6C6BD",
          300: "#F2E1CA",
          400: "#F5F0EA",
          500: "#59251B",
          600: "#150805",
        },
      },
    },
  },
  plugins: [],
};
