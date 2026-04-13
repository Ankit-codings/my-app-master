import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] },
      colors: { primary: '#1DA1F2', secondary: '#14171A', accent: '#F45B69' },
    },
  },
  plugins: [forms, typography],
};

export default config;
