import path from "node:path";
import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    { enforce: "pre", ...mdx() },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
  resolve: {
    alias: { "/@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
