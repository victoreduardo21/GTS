/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8FAFC', // Slate 50 (Fundo Geral - Quase branco)
        secondary: '#F1F5F9', // Slate 100 (Seções secundárias)
        accent: '#2563EB', // Blue 600 (Azul forte para destaque no branco)
        accentHover: '#1D4ED8', // Blue 700
        tech: '#059669', // Emerald 600 (Verde mais legível no branco)
        surface: '#FFFFFF', // White (Cartões e Elementos flutuantes)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}