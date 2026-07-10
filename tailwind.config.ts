import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './types/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070B14',
        panel: '#0D1320',
        panelAlt: '#111A2B',
        line: 'rgba(148, 163, 184, 0.16)',
        text: '#EAF0FF',
        muted: '#9BA9C7',
        accent: '#7DD3FC',
        accent2: '#A78BFA',
        success: '#34D399'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(125, 211, 252, 0.12)',
        card: '0 18px 50px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(circle at top, rgba(125, 211, 252, 0.16), transparent 35%), radial-gradient(circle at 80% 20%, rgba(167, 139, 250, 0.14), transparent 22%), linear-gradient(180deg, #05070d 0%, #070B14 100%)'
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