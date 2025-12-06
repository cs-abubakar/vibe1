import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#f0f7ff',
          '100': '#e0efff',
          '200': '#c1e0ff',
          '300': '#a1d0ff',
          '400': '#82c0ff',
          '500': '#62afff',
          '600': '#4a91f2',
          '700': '#3a74d9',
          '800': '#2c58bf',
          '900': '#1e3a8a',
        },
        secondary: {
          '50': '#f0fbf4',
          '100': '#e2f7ea',
          '200': '#c5ebd5',
          '300': '#a7dfc0',
          '400': '#8ad2ab',
          '500': '#6dc696',
          '600': '#52a87a',
          '700': '#3c815d',
          '800': '#295b41',
          '900': '#173525',
        },
        accent: {
          '300': '#fde68a',
          '400': '#facc15',
          '500': '#eab308',
          '600': '#ca8a04',
        },
        neutral: {
          '50': '#f8fafc',
          '100': '#f1f5f9',
          '200': '#e2e8f0',
          '300': '#cbd5e1',
          '400': '#94a3b8',
          '500': '#64748b',
          '600': '#475569',
          '700': '#334155',
          '800': '#1e293b',
          '900': '#0f172a',
        },
        whatsapp: '#25D366',
        'whatsapp-hover': '#128C7E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'section-gap-y': '8rem',
        'section-gap-x': '2rem',
        'component-gap': '2.5rem',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
}
export default config