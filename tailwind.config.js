/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        cardoctortheme: {
          primary: '#FF3811',
           
          "base-100": "#FFFFFF",  
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
