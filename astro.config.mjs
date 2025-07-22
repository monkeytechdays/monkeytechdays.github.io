import react from "@astrojs/react";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://www.monkeytechdays.com",
  integrations: [icon(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
