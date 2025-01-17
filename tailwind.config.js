/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "200px",
      sm: "360px",
      md: "768px",
      lg: "1080px",
    },
    colors: {
      "--green-500": "#4f5b51",
      "--green-900": "#2a3f2d",
      "--orange-700": "#ff8a4a",
      "--green-700": "#2c4530",
      "--okhra": "#fdf8e9",
      "--lime-green": "#a2de64",
      "--orange-500": "#ffce98",
      "--neutrals-900": "#111827",
      "--neutrals-800": "#1f2937",
      "--neutrals-700": "#374151",
      "--neutrals-600": "#4b5563",
      "--neutrals-500": "#6a7280",
      "--neutrals-400": "#9ba3af",
      "--neutrals-300": "#d1d5da",
      "--neutrals-200": "#e4e7eb",
      "--neutrals-100": "#f2f4f6",
      "--neutrals-50-501": "#f9fafb",
      "--error-01": "#ff6b6b",
      "--error-02": "#ffa8a8",
      "--error-03": "#ffe3e3",
      "--warning-01": "#fcc419",
      "--warning-02": "#ffe066",
      "--warning-03": "#fff3bf",
      "--success-01": "#88cf51",
      "--success-02": "#aae98c",
      "--success-03": "#ddf9d3",
      "--info-01": "#339af0",
      "--info-02": "#74c0fc",
      "--info-03": "#d0ebff",
      "--white-100": "white",
      "--white-88": "rgba(255,255,255,.88)",
      "--white-80": "rgba(255,255,255,.8)",
      "--white-72": "rgba(255,255,255,.72)",
      "--white-64": "rgba(255,255,255,.64)",
      "--white-56": "rgba(255,255,255,.56)",
      "--white-48": "rgba(255,255,255,.48)",
      "--white-40": "rgba(255,255,255,.4)",
      "--white-32": "rgba(255,255,255,.32)",
      "--white-24": "rgba(255,255,255,.24)",
      "--white-16": "rgba(255,255,255,.16)",
      "--white-8-89": "rgba(255,255,255,.08)",
      "--black-4-49": "rgba(0,0,0,.04)",
      "--black-100": "black",
    },
    extend: {
      fontSize: {
        h1: "48px",
        h2: "36px",
        h3: "30px",
        h4: "24px",
        h5: "20px",
        h6: "16px",
      },
    },
  },
  plugins: [],
};
