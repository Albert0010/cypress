const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      MY_VAR: 'Hello'
    },
    baseUrl: 'https://www.irent.am',
    specPattern: 'cypress/e2e/**/*.spec.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});