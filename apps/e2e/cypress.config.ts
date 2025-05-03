const path = require("node:path");
const { nxE2EPreset } = require("@nx/cypress/plugins/cypress-preset");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
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
