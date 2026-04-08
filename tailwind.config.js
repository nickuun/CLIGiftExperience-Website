/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#090d0b',
        panel: '#0f1713',
        panelAlt: '#131e19',
        line: '#233229',
        ink: '#edf3ec',
        inkMuted: '#9eaca2',
        accent: '#7fe3a1',
        accentSoft: '#2a5a39',
        amber: '#e2b35a',
        danger: '#d26d6d',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(127, 227, 161, 0.14), 0 10px 35px rgba(0, 0, 0, 0.34)',
        terminal: '0 0 0 1px rgba(127, 227, 161, 0.12), inset 0 1px 0 rgba(255,255,255,0.03)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(127, 227, 161, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(127, 227, 161, 0.06) 1px, transparent 1px)',
        glow: 'radial-gradient(circle at top, rgba(127, 227, 161, 0.14), transparent 38%), radial-gradient(circle at 75% 0%, rgba(226, 179, 90, 0.08), transparent 30%)',
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        blink: 'blink 1.1s steps(2, start) infinite',
        scan: 'scan 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-120%)' },
          '100%': { transform: 'translateY(320%)' },
        },
      },
    },
  },
  plugins: [],
};
