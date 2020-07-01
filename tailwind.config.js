module.exports = {
  purge: ["./src/**/*.svelte", "./public/*.html"],
  theme: {
    fontFamily: {
      'sans': 'Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
    },
    extend: {
      maxWidth: {
        '7xl': '80rem',
      },
      screens: {
        '2xl': '1600px',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      colors: {
        logo: '#444F5A'
      }
    },
  },
  variants: {},
  plugins: []
};

