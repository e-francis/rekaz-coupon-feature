import { defineConfig } from "cypress";
import "dotenv/config";

export default defineConfig({
  e2e: {
    env: {
      EMAIL: process.env.EMAIL,
      VALID_PASSWORD: process.env.VALID_PASSWORD,
      INVALID_PASSWORD: process.env.INVALID_PASSWORD,
    },
    baseUrl: "https://platform.rekaz.dev",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
