import type { Config } from 'tailwindcss';
import FullBleed from 'tailwindcss-full-bleed';
import tailwindThemer from 'tailwindcss-themer';

import { darkTheme, lightTheme } from './src/themes';
import { DesignSystemConfig } from './src/themes/design';
import { CustomClassesPlugin } from './src/themes/plugins';

const tailwindConfig: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './src/**/*.{js,ts,jsx,tsx,mdx,scss}',
    './app/**/*.{js,ts,jsx,tsx,mdx,scss}',
  ],
  theme: {
    extend: {
      // Comment line below if design system is not needed
      ...DesignSystemConfig,

      screens: {
        sm: '769px',
        md: '960px',
        lg: '1440px',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-in-left-bottom':
          'radial-gradient(circle at 0% 100%, var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    CustomClassesPlugin(),
    FullBleed,
    tailwindThemer({
      defaultTheme: {
        extend: darkTheme,
      },
      themes: [
        {
          name: 'light',
          extend: lightTheme,
        },
      ],
    }),
  ],
};

export default tailwindConfig;
