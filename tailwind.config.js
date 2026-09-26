/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FBFBFA",
        surface: "#FFFFFF",
        "surface-raised": "#F8FAFC",
        border: "#E2E8F0",
        "border-subtle": "#ECEEF2",
        burgundy: {
          50: '#FDF2F4',
          100: '#FBE6E9',
          200: '#F5CCD3',
          300: '#EAA3AF',
          400: '#DC7285',
          500: '#C04660',
          600: '#A32E48',
          700: '#800020',
          800: '#6B0B21',
          900: '#4D0818',
          950: '#2A030C',
        },
        brown: {
          50: '#FBF8F5',
          100: '#F4ECE4',
          200: '#E8D7C7',
          300: '#D7BC9F',
          400: '#C29B74',
          500: '#A97C4D',
          600: '#8B5A2B',
          700: '#6E4420',
          800: '#523318',
          900: '#3D2411',
          950: '#1F1108',
        },
        copper: {
          300: '#E6AF76',
          400: '#D49353',
          500: '#C27830',
          600: '#A75F20',
        },
        espresso: {
          800: '#23181C',
          900: '#181114',
          950: '#0E0A0B',
        },
        charcoal: "#0F172A",
        "charcoal-muted": "#475569",
        "charcoal-light": "#64748B",
        accent: {
          DEFAULT: "#0F172A",
          hover: "#1E293B",
          blue: "#2563EB",
          "blue-subtle": "#EFF6FF",
          "blue-border": "#BFDBFE",
          green: "#16A34A",
          "green-subtle": "#F0FDF4",
          "green-border": "#BBF7D0",
          amber: "#D97706",
          "amber-subtle": "#FFFBEB",
          "amber-border": "#FDE68A",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Geist Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)',
        'lift': '0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -2px rgba(15, 23, 42, 0.04)',
        'card': '0 0 0 1px rgba(226, 232, 240, 0.8), 0 2px 4px 0 rgba(15, 23, 42, 0.02)',
        'modal': '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
      },
      maxWidth: {
        'container': '1240px',
      }
    },
  },
  plugins: [],
}
