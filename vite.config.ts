import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  base: "/foliodev-proof-jordan-rivera-portfolio/",
  plugins: [react(), tailwindcss(), cloudflare()],
});
