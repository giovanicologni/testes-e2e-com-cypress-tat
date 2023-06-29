const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '1681o6',
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on,config){
      require('@cypress/grep/src/plugin')(config)
      return config
    },
    defaultCommandTimeout: 60000,
  },
})
