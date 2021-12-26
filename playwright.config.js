module.exports = {
  testMatch: '**/test/playwright/**/*.spec.js',
  use: {
    headless: true,
    locale: 'ja-JP',
    screenshot: 'only-on-failure', // 'off'|'on'|'only-on-failure'
    // video: 'on', // 'off'|'on'|'retain-on-failure'|'on-first-retry'
  },
  webServer: {
    command: 'npm run start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
}
