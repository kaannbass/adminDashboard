/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "flowbite/plugin",
  ],
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
