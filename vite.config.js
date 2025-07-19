import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "Portfolio-Site";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 8080,
  },
  base: "/Portfolio-Site/",
});
