/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px'
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addComponents, addUtilities }) {
      addComponents({
        '.glass': {
          '@apply bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10': {}
        },
        '.glass-light': {
          '@apply bg-white/40 dark:bg-white/20 backdrop-blur-lg border border-white/30 dark:border-white/15': {}
        },
        '.glass-dark': {
          '@apply bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/10 dark:border-white/5': {}
        },
        '.glass-sm': {
          '@apply bg-white/20 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/5': {}
        }
      });
      addUtilities({
        '.glass-glow': {
          'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
        },
        '.glass-glow-lg': {
          'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.25)'
        },
        '.dark .glass-glow': {
          'box-shadow': '0 8px 32px 0 rgba(255, 255, 255, 0.1)'
        },
        '.dark .glass-glow-lg': {
          'box-shadow': '0 8px 32px 0 rgba(255, 255, 255, 0.15)'
        }
      });
    }
  ],
};