import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#CCF1FE',
          200: '#99E4FD',
          300: '#66D6FB',
          400: '#33C9FA',
          500: '#00BBF9',
          600: '#0096C7',
          700: '#007095',
          800: '#004B64',
          900: '#002532',
        },
        success: {
          100: '#D2FEE9',
          200: '#A6FED2',
          300: '#79FDBC',
          400: '#4DFDA5',
          500: '#20FC8F',
          600: '#1ACA72',
          700: '#139756',
          800: '#0D6539',
          900: '#06321D',
        },
        warning: {
          100: '#FFF4CC',
          200: '#FFE899',
          300: '#FEDD67',
          400: '#FED134',
          500: '#FEC601',
          600: '#CB9E01',
          700: '#987701',
          800: '#664F00',
          900: '#332800',
        },
        danger: {
          100: '#F1D9D2',
          200: '#E3B2A5',
          300: '#D68C77',
          400: '#C8654A',
          500: '#BA3F1D',
          600: '#953217',
          700: '#702611',
          800: '#4A190C',
          900: '#250D06',
        },
        typo: {
          primary: '#12151A',
          secondary: '#45484D',
          icon: '#A2A3A6',
          inline: '#D1D1D3',
          outline: '#E3E3E5',
          light: '#F6F6F6',
          surface: '#FEFDFD',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;