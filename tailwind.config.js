module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      backgroundImage: theme => ({
        'greeting-pattern': "url('/src/img/greeting-bg.png')",
      }),
      colors: {
        'theme-blue': '#1e293b',
        'theme-btn-blue': '#0f172a',
        'theme-purple': '#c7d2fe',
        'theme-purple2': '#6366f1',
        'theme-gray': '#e2e8f0',
        'theme-dark-gray': '#94a3b8',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }

    },
  },
  plugins: [],
}