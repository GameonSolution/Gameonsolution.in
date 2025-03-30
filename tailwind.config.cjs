module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      backdropBlur: ["hover", "focus"],
    },
  },
  theme: {
    animation: {
      "carousel-move": "carousel-move var(--duration,80s) infinite",
      bounceUpDown: "bounceUpDown 1s ease-in-out infinite",
    },
    extend: {
      spacing: {
        "cursor-size": "40px",
        "cursor-hover-size": "80px",
      },
      colors: {
        "cursor-base": "rgba(53, 54, 57, 0.1)",
        "cursor-hover": "rgba(255, 165, 0, 0.5)",
        primary: {
          DEFAULT: "var(--color-primary)",
          border: "var(--color-primary-border)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          border: "var(--color-secondary-border)",
          foreground: "var(--secondary-foreground)",
        },
        background: "var(--color-primary)",
        foreground: "var(--color-primary)",
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.75, -1, 0.3, 2.33)",
      },
      fontFamily: {
        primary: ["Anton", "sans-serif"],
        secondary: ["Outfit", "sans-serif"],
        special: ['"Ethnocentric-RG"', "sans-serif"], // Custom font family
      },
      animation: {
        "rotate-circle": "rotate-circle 10s linear infinite",
        "rotate-reverse": "rotate-reverse 5s linear infinite",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        zoomIn: "zoomIn 0.5s ease-in-out forwards",
        lineUp: "lineUp 2s ease-out forwards",
        slideReveal: "slideReveal 1s ease-in forwards",
        revealText: "revealText 2s ease-in-out forwards", // Adjust duration as needed
        // revealText: "revealText 1.1s ease-in-out forwards",
        glow: "glow 1.5s infinite alternate",
      },
      blur: {
        "10px": "10px",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1.0625rem", // 17px
        lg: ["1.1875rem", "1.21"], // 19px
        xl: "1.3125rem", // 21px
        "2xl": "1.5rem", // 24px
        "3xl": "1.75rem", // 28px
        "4xl": ["2.5rem", "1.1"], // 40px
        "5xl": ["4.5rem", "1.05"], // 72px
      },
      keyframes: {
        bounceUpDown: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        "rotate-circle": {
          to: { transform: "rotate(1turn)" },
        },
        "rotate-reverse": {
          to: { transform: "rotate(-1turn)" },
        },
        "carousel-move": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        lineUp: {
          "0%": { opacity: "0", transform: "translateY(80%)" },
          "20%": { opacity: "0" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideReveal: {
          "0%": { transform: "translateX(-90%)" }, // Start at the left
          "60%": { transform: "translateX(0%)" }, // Slide fully across the text
          "100%": { transform: "translateX(200%)" }, // Completely move out of view
        },
        revealText: {
          "0%": { opacity: 0, transform: "scale(0.95)", filter: "blur(4px)" },
          "40%": {
            opacity: 0,
            transform: "translateY(0)",
            filter: "blur(0px)",
          },
          "60%": { opacity: 1, transform: "scale(1)", filter: "blur(0px)" }, // Fully reveals with no blur
          "70%": {
            opacity: 1,
            transform: "translateY(0%)",
            filter: "blur(0px)",
          }, // Brief pause
          "100%": {
            opacity: 0,
            transform: "translateY(-200%)",
            filter: "blur(9px)",
          }, // Moves up with blur and fades out
        },
        glow: {
          "0%": {
            boxShadow: "0 0 10px rgba(255, 255, 0, 0.8)", // brighter starting point
          },
          "50%": {
            boxShadow: "0 0 25px rgba(255, 255, 0, 1)", // peak intensity
          },
          "100%": {
            boxShadow: "0 0 10px rgba(255, 255, 0, 0.8)", // return to initial glow
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          /* Hide scrollbar for Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Hide scrollbar for IE, Edge, and Firefox */
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
      });
    },
  ],
};
