const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '1681o6',
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 60000,
  },
})
