const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2efw2e',
  watchForFileChanges: false,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 600,
  waitForAnimations: true,
  animationDistanceThreshold: 20,
  defaultCommandTimeout: 10000,
  execTimeout: 600000,
  pageLoadTimeout : 60000,
  requestTimeout: 15000,
  responseTimeout : 15000,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
