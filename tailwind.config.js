/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'title-color': '#77b748',
        "title-primary": "var(--text-title-primary)",
        "title-secondary": "var(--text-title-secondary)",

        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        "bg-theme": "var(--bg-theme)",
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",

        "bg-navbar": 'var(--bg-navbar)',

      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(180deg, #8dc63f 0%, #8dc63f 60%, #8dc63f 86%, rgba(255,255,255,1) 100%)',
      }
    },

  },
  plugins: [require("daisyui")],
}

