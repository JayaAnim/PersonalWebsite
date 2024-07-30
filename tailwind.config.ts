import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'neon-glow': '0 0 10px #00FFFF, 0 0 2px #39FF14',
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                'electric-blue': '#00FFFF',
                'neon-green': '#39FF14',
                'dark-black': '#000000',
            }
        },
    },
    plugins: [
        plugin(function({ addUtilities }) {
          const newUtilities: { [key: string]: { '--fall-distance': string } } = {}
          for (let i = 20; i <= 45; i++) {
            newUtilities[`.fall-${i}`] = {
              '--fall-distance': `${i}vh`,
            }
          }
          addUtilities(newUtilities)
        })
    ],
};

export default config;
