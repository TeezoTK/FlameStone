import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'flame-orange': '#ff6b35',
        'charcoal': '#1a1a1a',
        'deep-black': '#0d0d0d',
        'off-white': '#f5f5f0',
        'stone-beige': '#ebe9e1',
        'text-gray': '#6b6b6b',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;