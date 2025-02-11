import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Keep root as current directory
  server: {
    port: 3000, // Change port if needed
  },
  build: {
    outDir: "dist", // Output directory for production
  },
  base: '/portfolio/'
});