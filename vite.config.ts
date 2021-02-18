import path from "path";
import { defineConfig } from "vite";
import mdx from "@brillout/vite-plugin-mdx";
import viteImagemin from "vite-plugin-imagemin";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [
    mdx(),
    reactRefresh(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      webp: {
        quality: 75,
      },
      mozjpeg: {
        quality: 65,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false,
          },
          {
            removeEmptyAttrs: false,
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: { "/@": path.resolve(__dirname, "src/") },
  },
});
