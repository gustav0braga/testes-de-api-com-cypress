const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      API_BASE_URL: 'https://api.typeform.com/', // URL da API
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
