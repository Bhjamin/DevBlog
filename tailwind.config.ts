import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#10b981',
        'primary-focus': '#047857',
        'secondary': '#9333ea',
        'secondary-focus': '#6b21a8',
        'accent': '#8c7a6b',
        'accent-focus': '#7f6e61',
        'base-100': '#252323',
        'base-200': '#1e1d1d',
        'base-300': '#111010',
        'base-content': '#ffffff'
      }
    },
  },
  plugins: [],
} satisfies Config;
