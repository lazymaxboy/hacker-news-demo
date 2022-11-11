import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/hacker-news-demo",
  plugins: [react()],
});
