import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 45, 67, 0.25)",
        glass: "0 20px 60px rgba(0, 0, 0, 0.45)",
        edge: "0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.06)"
      },
      backgroundImage: {
        "radial-glow": "radial-gradient(60% 60% at 50% 50%, rgba(255,45,67,0.25) 0%, rgba(255,45,67,0) 60%)",
        "grid-fade": "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        sweep: {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(40%)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
        sweep: "sweep 10s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
