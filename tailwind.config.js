/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'animate-iconFall'
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 10px rgba(0,255,255,0.5), 0 0 20px rgba(0,255,255,0.3)",
        neonRed: "0 0 10px rgba(255,0,80,0.5), 0 0 20px rgba(255,0,80,0.3)",
      },
      
      animation: {
        shakeGlow: "shakeGlow 0.6s ease-in-out",
        iconFall: "iconFall linear forwards",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        glowRed: "glowRed 2s ease-in-out infinite",
        drawZigzag: "drawZigzag 2s ease-out forwards",
        glowPulse: "pulseZigzag 3s ease-in-out infinite",
        borderGlow: "borderGlow 3s ease-in-out infinite",
        zoomInSlow: "zoomInSlow 1.2s ease-out forwards",
        scanLine: "scanLine 2.5s linear infinite",
      },
      keyframes: {
        shakeGlow: {
          "0%, 100%": {
            transform: "translateX(0)",
            textShadow: "0 0 2px #ff0055, 0 0 4px #ff0055",
          },
          "20%": { transform: "translateX(-5px)" },
          "40%": { transform: "translateX(5px)" },
          "60%": { transform: "translateX(-5px)" },
          "80%": { transform: "translateX(5px)" },
        },
        iconFall: {
          "0%": { transform: "translateY(-10%)", opacity: 0.2 },
          "100%": { transform: "translateY(120%)", opacity: 0 },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        glow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 4px #00f7ff)",
          },
          "50%": {
            filter: "drop-shadow(0 0 8px #00f7ff)",
          },
        },
        glowRed: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 4px #ff0055)",
          },
          "50%": {
            filter: "drop-shadow(0 0 8px #ff0055)",
          },
        },
        drawZigzag: {
          from: {
            strokeDashoffset: 260,
          },
          to: {
            strokeDashoffset: 0,
          },
        },
        pulseZigzag: {
          "0%, 100%": {
            strokeOpacity: 0.3,
          },
          "50%": {
            strokeOpacity: 0.7,
          },
        },
        borderGlow: {
          "0%, 100%": {
            boxShadow: "0 0 4px rgba(0,255,255,0.3)",
          },
          "50%": {
            boxShadow: "0 0 12px rgba(0,255,255,0.6)",
          },
        },
        zoomInSlow: {
          from: {
            transform: "scale(0.4)",
            opacity: 0,
          },
          to: {
            transform: "scale(1)",
            opacity: 0.5,
          },
        },
      },
    },
  },
  plugins: [],
};
