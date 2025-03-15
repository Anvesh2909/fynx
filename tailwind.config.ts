import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "blue-50": "#eef5ff",
        "blue-100": "#e0eeff",
        "blue-500": "#3b82f6",
        "blue-600": "#2563eb",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #eef5ff 0%, #f8fafc 100%)',
        'button-gradient': 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
        'card-gradient': 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;