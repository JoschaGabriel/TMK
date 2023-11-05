/** @type {import('tailwindcss').Config} */
module.exports = {
  content: { files: ["./src/**/*.{html,js}"], relative: true, transform: (content) => content.replace(/taos:/g, ""), files: ["./src/*.{html,js}"] },
  theme: {
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 500,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ["bounce", "heartBeat"],
    },
    extend: {},
    prefix: "tw-",
  },
  plugins: [require("taos/plugin", "tailwindcss-animatecss", "daisyui")],
  safelist: ["!duration-[0ms]", "!delay-[0ms]", 'html.js :where([class*="taos:"]:not(.taos-init))'],
};
