export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d9ebff',
          200: '#b9dafd',
          300: '#8abef9',
          400: '#5c9df4',
          500: '#3b7ae7',
          600: '#2b63d1',
          700: '#224fb4',
          800: '#214793',
          900: '#203d75'
        },
        accent: '#f59e0b',
        success: '#10b981',
        danger: '#ef4444',
        slate: {
          950: '#0f172a'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
