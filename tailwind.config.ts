import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        ourBlue: "#1B9AAA",
        bone: "#DDDBCB",
        beige: "#F5F1E3",
        white: "#FFFFFF",
        black: "#050505",
      },
      backgroundImage: {
        helmet: "url('../../public/helmet.gif')",
        base: "url('../../public/base.gif')",
      },
    },
  },
  plugins: [],
} satisfies Config;
