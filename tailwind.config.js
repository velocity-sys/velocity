/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#1a1a1f',
          900: '#0f0f14',
          950: '#090909',
        },
        zinc: {
          850: '#1f1f1f',
          900: '#161618',
          950: '#0a0a0a',
        },
        navy: {
          50: '#f4f6fa',
          100: '#e8ebf3',
          200: '#d6dce9',
          300: '#bac5d9',
          400: '#9aa9c6',
          500: '#344579',
          600: '#344579',
          700: '#2d3a65',
          800: '#262f52',
          900: '#1f253e',
          950: '#18202b',
        },
        gold: {
          300: '#FFE5A5',
          400: '#FFD769',
          500: '#FFE5A5',
          600: '#E6CC94',
          700: '#D4B882',
        },
        operational: {
          green: '#10b981',
          amber: '#f59e0b',
          red: '#ef4444',
        }
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        'radial-fade': 'radial-gradient(circle at center, rgba(52,69,121,0.15) 0%, transparent 60%)',
      },
      backgroundSize: {
        'grid': '100px 100px, 100px 100px, 20px 20px, 20px 20px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-strong': 'glow-strong 1.5s ease-in-out infinite alternate',
        'blink-green': 'blink-green 2.5s ease-in-out infinite',
        'blink-amber': 'blink-amber 3s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'energy-flow-h': 'energy-flow-horizontal 8s linear infinite',
        'energy-flow-v': 'energy-flow-vertical 6s linear infinite',
        'energy-flow-d1': 'energy-flow-diagonal1 10s linear infinite',
        'energy-flow-d2': 'energy-flow-diagonal2 9s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(52,69,121,0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(52,69,121,0.8)' },
        },
        'glow-strong': {
          '0%': { 
            boxShadow: '0 0 20px rgba(52,69,121,0.6), 0 0 40px rgba(255,229,165,0.3)',
            borderColor: 'rgba(52,69,121,0.8)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(52,69,121,1), 0 0 80px rgba(255,229,165,0.6)',
            borderColor: 'rgba(255,229,165,0.9)'
          },
        },
        'blink-green': {
          '0%, 100%': { 
            opacity: '1'
          },
          '50%': { 
            opacity: '0.4'
          },
        },
        'blink-amber': {
          '0%, 100%': { 
            opacity: '1'
          },
          '50%': { 
            opacity: '0.5'
          },
        },
        'pulse-gold': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 15px rgba(255,229,165,0.6)'
          },
          '50%': { 
            opacity: '0.7',
            boxShadow: '0 0 25px rgba(255,229,165,0.9)'
          },
        },
        'energy-flow-horizontal': {
          '0%': { 
            transform: 'translateX(-200px)',
            opacity: '0'
          },
          '5%': { 
            transform: 'translateX(-100px)',
            opacity: '1'
          },
          '95%': { 
            transform: 'translateX(calc(100vw + 100px))',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(calc(100vw + 200px))',
            opacity: '0'
          },
        },
        'energy-flow-vertical': {
          '0%': { 
            transform: 'translateY(-200px)',
            opacity: '0'
          },
          '5%': { 
            transform: 'translateY(-100px)',
            opacity: '1'
          },
          '95%': { 
            transform: 'translateY(calc(100vh + 100px))',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(calc(100vh + 200px))',
            opacity: '0'
          },
        },
        'energy-flow-diagonal1': {
          '0%': { 
            transform: 'translate(-100vw, -100vh)',
            opacity: '0'
          },
          '10%': { 
            opacity: '0.4'
          },
          '90%': { 
            opacity: '0.4'
          },
          '100%': { 
            transform: 'translate(100vw, 100vh)',
            opacity: '0'
          },
        },
        'energy-flow-diagonal2': {
          '0%': { 
            transform: 'translate(100vw, -100vh)',
            opacity: '0'
          },
          '10%': { 
            opacity: '0.3'
          },
          '90%': { 
            opacity: '0.3'
          },
          '100%': { 
            transform: 'translate(-100vw, 100vh)',
            opacity: '0'
          },
        }
      }
    },
  },
  plugins: [],
}