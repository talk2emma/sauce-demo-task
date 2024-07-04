const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportHeight: 600,
  video: false,
  e2e: {
    baseUrl:'https://www.saucedemo.com',
    chromeWebSecurity: true,
    defaultCommandTimeout: 6000,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
