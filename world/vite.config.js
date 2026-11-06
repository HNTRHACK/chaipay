import { defineConfig } from "vite";

// Built into ../app/world so the ChaiPay relayer serves it at /world/ with no extra setup.
export default defineConfig({
  base: "/world/",
  build: {
    outDir: "../app/world",
    emptyOutDir: true,
    target: "es2022",
    chunkSizeWarningLimit: 1200,
  },
  server: {
    proxy: {
      "/api": "http://localhost:8787",
    },
  },
});
