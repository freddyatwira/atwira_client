import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/atwira_client/",
  plugins: [react()],
  server: {
    port: 3003,
  },
});
