import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './types/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        panelAlt: 'rgb(var(--color-panel-alt) / <alpha-value>)',
        line: 'rgba(var(--color-line), 0.16)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        accent2: 'rgb(var(--color-accent-2) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(125, 211, 252, 0.12)',
        card: '0 18px 50px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'radial-glow': 'var(--bg-radial-glow)'
      },
      keyframes: {
        'loading-letter': {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(-8px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out both',
        'loading-letter': 'loading-letter 1s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
