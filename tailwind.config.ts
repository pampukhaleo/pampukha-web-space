
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Dark theme base colors inspired by the screenshot
        background: {
          DEFAULT: '#0F172A',  // Deep navy blue
          darker: '#0B1120',   // Even darker blue for depth
        },
        foreground: {
          DEFAULT: '#FFFFFF',  // White text
          muted: '#94A3B8',    // Soft gray for secondary text
        },
        primary: {
          DEFAULT: '#3B82F6',  // Bright blue for primary elements
          light: '#60A5FA',    // Lighter blue for gradients
          dark: '#1D4ED8',     // Darker blue for hover states
        },
        accent: {
          DEFAULT: '#10B981',  // Teal/green accent color
          light: '#34D399',    // Lighter teal
        },
        border: {
          DEFAULT: '#1E293B',  // Dark border color
        },
        muted: {
          DEFAULT: '#1E293B',  // Muted background color
          foreground: '#64748B' // Muted text color
        },
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #3B82F6, #60A5FA)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#FFFFFF',
            a: {
              color: '#3B82F6',
              '&:hover': {
                color: '#60A5FA',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography')
  ],
} satisfies Config;
