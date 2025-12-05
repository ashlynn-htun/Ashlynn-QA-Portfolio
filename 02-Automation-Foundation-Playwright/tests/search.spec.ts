import { test, expect } from '@playwright/test';

test('Search functionality returns results', async ({ page }) => {

  // Navigate to demo site
  await page.goto('https://demowebshop.tricentis.com');

  // Fill search box
  const searchBox = page.locator('#small-searchterms');
  await searchBox.fill('computer');

  // Click search button
  const searchButton = page.locator('input[value="Search"]');
  await searchButton.click();

  // Wait for results container to load
  const resultsGrid = page.locator('.product-item');
  await expect(resultsGrid.first()).toBeVisible({ timeout: 5000 });

  // Validate that at least 1 item appears
  const count = await resultsGrid.count();
  expect(count).toBeGreaterThan(0);

  // Optional stronger validation → verifies the title contains "computer"
  const firstItemTitle = resultsGrid.first().locator('.product-title a');
  await expect(firstItemTitle).toContainText(/computer/i);

});
