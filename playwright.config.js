module.exports = {
  testMatch: '**/test/playwright/**/*.spec.js',
  use: {
    // headless: false,
    locale: 'ja-JP',
  },
  webServer: {
    command: 'npm run start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
}
