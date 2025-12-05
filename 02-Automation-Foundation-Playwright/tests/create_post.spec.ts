import { test, expect, Page } from '@playwright/test';
import { PostEditorPage } from '../pages/PostEditorPage';

const BASE = 'http://localhost:3000/00-Mock-Post-Editor-App';

async function login(page: Page) {
  await page.goto(`${BASE}/login.html`);
  await page.locator('#email').fill('admin@example.com');
  await page.locator('#password').fill('password');
  await page.locator('button', { hasText: 'Login' }).click();
}

test.describe('Mock Post Editor - Post Creation', () => {

  test('User can create and publish a post', async ({ page }) => {
    const editor = new PostEditorPage(page);

    await login(page);
    await page.goto(`${BASE}/editor.html`);

    await editor.createPost('Test Title', 'This is test content.', 'qa,automation');
    await editor.publish();

    // Wait for script.js to update status
    await page.waitForTimeout(500);

    // error should remain empty
    await expect(page.locator('#error')).toHaveText('');
  });

  test('User can save a draft successfully', async ({ page }) => {
    const editor = new PostEditorPage(page);

    await login(page);
    await page.goto(`${BASE}/editor.html`);

    await editor.createPost('Draft Title', 'Draft content...', 'draft,post');
    await editor.saveDraft();

    // Give JS auto-save function time to update UI
    await page.waitForTimeout(500);

    await expect(page.locator('#autosave-status')).toContainText('Draft saved');
  });

});


