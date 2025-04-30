import path from "node:path";

import { nxE2EPreset } from "@nx/cypress/plugins/cypress-preset";
import { defineConfig } from "cypress";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    supportFile: "./cypress/support/e2e.ts",
    specPattern: "./cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
