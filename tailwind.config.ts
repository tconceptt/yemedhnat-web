import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B6CB0',
          dark: '#2C5282',
          light: '#E8F4F8',
        },
        accent: {
          teal: '#14B8A6',
          sage: '#6B9080',
        },
        background: '#FAFBFC',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.15', fontWeight: '500', letterSpacing: '-0.01em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', fontWeight: '500', letterSpacing: '-0.005em' }],
      },
      fontWeight: {
        'heading': '500',
        'body': '400',
        'semibold': '600',
      },
      letterSpacing: {
        'subheading': '0.01em',
        'tight': '-0.01em',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
