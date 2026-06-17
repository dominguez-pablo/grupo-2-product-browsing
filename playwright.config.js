const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',

  timeout: 60 * 2000,

  fullyParallel: false,

  retries: 0,

  // Reporter: genera un reporte HTML lindo
  reporter: 'html',

  use: {
    baseURL: 'https://www.demoblaze.com',

    launchOptions: {    slowMo: 5000},

    trace: 'on-first-retry',

    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
     name: 'firefox',
       use: { ...devices['Desktop Firefox'] },
     },
     {
       name: 'webkit',
       use: { ...devices['Desktop Safari'] },
     },
  ],
});
