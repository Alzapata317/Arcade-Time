import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neonBlue: '#45f3ff',
        neonPink: '#ff6ec7',
        neonPurple: '#c77dff',
        neonRed: '#ff073a',
        neonYellow: '#FFFF33',
        neonGreen: '#39ff14',
      },
      boxShadow: {
        neon: '0 0 5px #45f3ff, 0 0 10px #45f3ff, 0 0 15px #45f3ff, 0 0 20px #45f3ff, 0 0 25px #45f3ff',
        neonPink: '0 0 5px #ff6ec7, 0 0 10px #ff6ec7, 0 0 15px #ff6ec7, 0 0 20px #ff6ec7, 0 0 25px #ff6ec7',
        neonPurple: '0 0 5px #c77dff, 0 0 10px #c77dff, 0 0 15px #c77dff, 0 0 20px #c77dff, 0 0 25px #c77dff',
        neonRed: '0 0 5px #ff073a, 0 0 10px #ff073a, 0 0 15px #ff073a, 0 0 20px #ff073a, 0 0 25px #ff073a',
        neonYellow: '0 0 10px #FFFF33, 0 0 20px #FFFF33, 0 0 30px #FFFF33, 0 0 40px #FFFF33',
        neonBlue: '0 0 5px #45f3ff, 0 0 10px #45f3ff, 0 0 15px #45f3ff, 0 0 20px #45f3ff',
        neonGreen: '0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14, 0 0 20px #39ff14',
      },
      fontFamily: {
        neon: ['NeonRetroDemoVersionRegular', 'sans-serif'],
        neonSans: ['neonSans', 'sans-serif'],
      },
      screens: {
        'pm-sm': { 'raw': '(min-width: 0px) and (orientation: portrait)' },
        'lm-sm': { 'raw': '(min-width: 0px) and (orientation: landscape)' },
        'pm-md': { 'raw': '(min-width: 641px) and (orientation: portrait)' },
        'lm-md': { 'raw': '(min-width: 850px) and (orientation: landscape)' },
        'pm-lg': { 'raw': '(min-width: 1201px) and (orientation: portrait)' },
        'lm-lg': { 'raw': '(min-width: 1201px) and (orientation: landscape)' },
        'pm-xl': { 'raw': '(min-width: 1800px) and (orientation: portrait)' },
        'lm-xl': { 'raw': '(min-width: 1800px) and (orientation: landscape)' },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: any, options?: any) => void }) {
      addUtilities({
        '.text-shadow-neon': {
          textShadow: '0 0 5px #45f3ff, 0 0 10px #45f3ff, 0 0 15px #45f3ff, 0 0 20px #45f3ff, 0 0 25px #45f3ff',
        },
        '.text-shadow-neon-pink': {
          textShadow: '0 0 5px #ff6ec7, 0 0 10px #ff6ec7, 0 0 0px #ff6ec7, 0 0 20px #ff6ec7, 0 0 25px #ff6ec7',
        },
        '.text-shadow-neon-purple': {
          textShadow: '0 0 5px #c77dff, 0 0 10px #c77dff, 0 0 15px #c77dff, 0 0 20px #c77dff, 0 0 25px #c77dff',
        },
        '.text-shadow-neon-red': {
          textShadow: '0 0 5px #ff073a, 0 0 10px #ff073a, 0 0 15px #ff073a, 0 0 20px #ff073a, 0 0 25px #ff073a',
        },
        '.text-shadow-neonYellow': {
          textShadow: '0 0 3px #FFFF33, 0 0 6px #FFFF33, 0 0 9px #FFFF33, 0 0 12px #FFFF33',
        },
        '.text-shadow-neonGreen': {
          textShadow: '0 0 3px #39ff14, 0 0 6px #39ff14, 0 0 9px #39ff14',
        },
      });
    },
  ],
};
export default config;
