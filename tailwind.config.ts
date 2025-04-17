
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
        // Dark theme colors based on the screenshots
        background: {
          DEFAULT: '#0B1120',  // Deeper navy blue background
          darker: '#080E1A',   // Even darker blue for depth
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
        brand: {
          blue: '#3B82F6',     // Brand blue color
          teal: '#10B981',     // Brand teal color
          orange: '#F59E0B',   // Brand orange color
          purple: '#8B5CF6',   // Brand purple color
          red: '#EF4444',      // Brand red color
        },
        border: {
          DEFAULT: '#1E293B',  // Dark border color
        },
        muted: {
          DEFAULT: '#1E293B',  // Muted background color
          foreground: '#64748B' // Muted text color
        },
        card: {
          DEFAULT: '#0F172A',  // Card background color
          foreground: '#FFFFFF' // Card text color
        },
        dark: {
          lighter: '#1E293B',  // Lighter dark color
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
