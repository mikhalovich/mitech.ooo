/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],

  theme: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
      primary: ['"Open Sans"', 'sans-serif'],
      logo: ['Baumans', 'cursive']
    },

    extend: {
      screens: {
        mobile: '440px',
        tablet: '768px',
        'max-tablet': { max: '768px' },
        laptop: '1024px',
        desktop: '1280px'
      },

      maxWidth: {
        container: '1312px',
        'container-service': '1158px',
        'container-blog': '1044px',
        'container-narrow': '960px'
      },

      colors: {
        bg: {
          main: 'rgb(var(--color-bg-main) / <alpha-value>)',
          subtle: 'rgb(var(--color-bg-subtle) / <alpha-value>)'
        },
        surface: {
          cream: 'rgb(var(--color-surface-cream) / <alpha-value>)',
          blue: 'rgb(var(--color-surface-blue) / <alpha-value>)',
          'blue-alt': 'rgb(var(--color-surface-blue-alt) / <alpha-value>)',
          green: 'rgb(var(--color-surface-green) / <alpha-value>)',
          beige: 'rgb(var(--color-surface-beige) / <alpha-value>)'
        },
        content: {
          main: 'rgb(var(--color-text-main) / <alpha-value>)',
          muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
          light: 'rgb(var(--color-text-light) / <alpha-value>)',
          blog: 'rgb(var(--color-text-blog) / <alpha-value>)'
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          hover: 'rgb(var(--color-primary-hover) / <alpha-value>)'
        },
        amber: 'rgb(var(--color-amber) / <alpha-value>)',
        'yellow-soft': 'rgb(var(--color-yellow-soft) / <alpha-value>)',
        accent: {
          blue: 'rgb(var(--color-blue) / <alpha-value>)',
          'blue-hover': 'rgb(var(--color-blue-hover) / <alpha-value>)',
          green: 'rgb(var(--color-green) / <alpha-value>)',
          'green-hover': 'rgb(var(--color-green-hover) / <alpha-value>)'
        },
        border: {
          DEFAULT: 'rgb(var(--color-border) / <alpha-value>)',
          light: 'rgb(var(--color-border-light) / <alpha-value>)'
        },
        error: {
          DEFAULT: 'rgb(var(--color-error) / <alpha-value>)',
          dark: 'rgb(var(--color-error-dark) / <alpha-value>)'
        }
      },

      borderRadius: {
        input: '8px',
        card: '16px',
        'card-lg': '20px',
        'card-xl': '24px'
      }
    }
  }
};