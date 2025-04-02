/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#8B5CF6", // violet-500
          DEFAULT: "#7C3AED", // violet-600
          dark: "#6D28D9", // violet-700
        },
        secondary: {
          light: "#38BDF8", // sky-400
          DEFAULT: "#0EA5E9", // sky-500
          dark: "#0284C7", // sky-600
        },
        accent: {
          light: "#22D3EE", // cyan-400
          DEFAULT: "#06B6D4", // cyan-500
          dark: "#0891B2", // cyan-600
        },
        tertiary: {
          light: "#F472B6", // pink-400
          DEFAULT: "#EC4899", // pink-500
          dark: "#DB2777", // pink-600
        },
        darkBg: {
          light: "#1E293B", // slate-800
          DEFAULT: "#0F172A", // slate-900
          dark: "#020617", // slate-950
        },
        lightBg: {
          light: "#FFFFFF",
          DEFAULT: "#F8FAFC", // slate-50
          dark: "#F1F5F9", // slate-100
        },
        // Adding subtle grays for dark mode
        darkGray: {
          lightest: "#475569", // slate-600
          light: "#334155", // slate-700
          DEFAULT: "#1E293B", // slate-800
          dark: "#0F172A", // slate-900
        },
        // For cards and elevated surfaces in dark mode
        darkSurface: {
          DEFAULT: "#1E293B", // slate-800
          elevated: "#334155", // slate-700
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "'Inter var'", "Inter", "sans-serif"],
        display: ["'Clash Display'", "Satoshi", "Inter", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 15px rgba(124, 58, 237, 0.4)",
        "glow-sky": "0 0 15px rgba(14, 165, 233, 0.4)",
        "glow-pink": "0 0 15px rgba(236, 72, 153, 0.4)",
        subtle: "0 2px 10px rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 10px 30px rgba(0, 0, 0, 0.12)",
        "dark-card": "0 4px 20px rgba(0, 0, 0, 0.3)",
        "dark-card-hover": "0 10px 30px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 15s ease infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
        128: "32rem",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: theme("colors.gray.900"),
            lineHeight: "1.7",
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.light"),
            },
            h1: {
              color: theme("colors.gray.100"),
            },
            h2: {
              color: theme("colors.gray.100"),
            },
            h3: {
              color: theme("colors.gray.100"),
            },
            h4: {
              color: theme("colors.gray.100"),
            },
            code: {
              color: theme("colors.gray.300"),
            },
            blockquote: {
              color: theme("colors.gray.400"),
            },
            strong: {
              color: theme("colors.gray.200"),
            },
          },
        },
      }),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}; 