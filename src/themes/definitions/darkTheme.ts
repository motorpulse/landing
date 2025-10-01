import type { Config } from 'tailwindcss';
import type { Defined } from 'xenopomp-essentials';

type Theme = Defined<Defined<Config['theme']>['extend']>;

/**
 * This theme is **default**.
 */
export const darkTheme = {
  colors: {
    'accent-color': '#107BF4',
    'top-border':
      'rgba(86.27704560756683 85.60786351561546 85.60786351561546 / 0.5)',
    'sd-btn': '#2D2C2C',
    danger: '#ED5457',
    warning: '#D17C39',
    success: '#33A46E',
    archive: '#F49C20',
    secure: '#B200FF',
    primary: {
      bg: '#000000',
      font: '#FFFFFF',
      guide: '#565656',
      'font-shallow': '#979797',
    },
    secondary: {
      'bg-main': '#202020',
      'bg-brutal': '#1B1B1B',
      'bg-post': '#282727',
      bg: {
        hover: '#1D1B1B',
        active: '#474545',
      },
    },
    col: {
      sel: '#FFFFFF',
      icon: '#FFFFFF',
      shadow: 'rgba(0 0 0 / 0.20999999344348907)',
      og: {
        '100': '#F61D3A',
        '200': '#F61D74',
        '300': '#CB5AC4',
        '400': '#8B45F5',
        '500': '#452EE0',
        '600': '#A2C026',
        '700': '#53CA28',
        '800': '#28CC6B',
        '900': '#1CA4C6',
        '1000': '#3574F5',
        '1100': '#DEB302',
        '1200': '#FFAD0B',
        '1300': '#FF7A1F',
        '1400': '#F45C45',
        '1500': '#FF5B73',
        '1600': '#312244',
        '1700': '#3E1F47',
        '1800': '#4D194D',
        '1900': '#006466',
        '2000': '#1B3A4B',
        '000': '#2F2F2F',
      },
    },
    btn: {
      ios: {
        transparent: '#2E90FF',
      },
      mac: {
        bg: '#116ACF',
        font: '#FFFFFF',
      },
      filled: {
        bg: '#FFFFFF',
        font: '#000000',
      },
    },
    og: {
      'grad-2': '#000000',
      'grad-linear': '#000000',
      'grad-3': '#000000',
      'grad-ipad': '#000000',
      'grad-21x9': '#000000',
      'grad-4': '',
      grad: '#000000',
    },
  },
} satisfies Theme;
