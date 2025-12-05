import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can log in with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('admin@example.com', 'password');

 await expect(page).toHaveURL(/00-Mock-Post-Editor-App\/dashboard$/);

});
