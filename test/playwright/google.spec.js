const { test, expect } = require('@playwright/test');

test('search TAM on Google', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/)

  await page.fill('[name=q]', 'TAM');

  await Promise.all([
    page.waitForNavigation(),
    page.press('[name=q]', 'Enter')
  ])

  await expect(page.locator('#main')).toContainText('tam-tam.co.jp')
})
