import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt"],
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,json,woff,woff2,ttf,eot}",
        ],
        globDirectory: "dist",
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 10,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: "App React",
        short_name: "React",
        description: "App React+Vite PWA",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#228be6",
        screenshots: [
          {
            src: "/screenshots/img-1.jpg",
            sizes: "4226x2847",
            type: "image/jpg",
            form_factor: "wide",
          },
          {
            src: "/screenshots/img-2.jpg",
            sizes: "3000x2000",
            type: "image/jpg",
            form_factor: "narrow",
          },
        ],
        icons: [
          {
            src: "/icons/revisar.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "/icons/chimenea-de-la-casa.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
