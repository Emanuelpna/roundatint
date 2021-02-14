import path from "path";
import { defineConfig } from "vite";
import mdx from "@brillout/vite-plugin-mdx";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  alias: { "/@": path.resolve(__dirname, "src/") },
  plugins: [mdx(), reactRefresh()],
});
