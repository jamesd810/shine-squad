import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    base: "/",
    build: {
      outDir: "build",
    },
    plugins: [react()],
    server: {
      hmr: {
        host: "www.shinesquadchicago.com",
        protocol: "wss",
      },
      allowedHosts: ["shinesquadchicago.com", "www.shinesquadchicago.com"],
    },
  };
});
