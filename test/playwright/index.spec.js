const { test, expect } = require('@playwright/test');

test('index page', async ({ page, baseURL }) => {
  await page.goto(baseURL);

  // await page.screenshot({ path: 'test-results/index.png', fullPage: true });

  await expect(page.locator('h1')).toContainText('Grand Menu')
  await expect(page.locator('.menu')).toContainText('ミラノ風ドリア')
})
