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
        base: "url('../../public/background.jpg')",
        beach: "url('../../public/beach.png')",
        space: "url('../../public/space.png')",
        forest: "url('../../public/forest.png')",
        home: "url('../../public/home.png')",
        sky: "url('../../public/sky.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
