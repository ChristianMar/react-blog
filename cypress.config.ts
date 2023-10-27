import { defineConfig } from 'cypress';

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'https://localhost:9000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
