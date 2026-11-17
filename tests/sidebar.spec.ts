import { test, expect } from '@playwright/test';
import { USERS } from './data';

test.describe('Бічне меню (Варіант 5)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill(USERS.standard.username);
    await page.getByPlaceholder('Password').fill(USERS.standard.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('відкриття бічного меню відображає всі очікувані пункти навігації', async ({
    page,
  }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();

    const navigation = page.getByRole('navigation');
    await expect(navigation).toBeVisible();

    const menuItems = navigation.locator('.bm-item');
    await expect(menuItems).toHaveCount(5);
    await expect(menuItems).toHaveText([
      'All Items',
      'Dynamic Catalog',
      'About',
      'Logout',
      'Reset App State',
    ]);

    await expect(
      navigation.getByRole('button', { name: 'All Items' }),
    ).toBeVisible();
    await expect(
      navigation.getByRole('button', { name: 'Dynamic Catalog' }),
    ).toBeVisible();
    await expect(navigation.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(
      navigation.getByRole('button', { name: 'Logout' }),
    ).toBeVisible();
    await expect(
      navigation.getByRole('button', { name: 'Reset App State' }),
    ).toBeVisible();
  });

  test('вихід із системи через пункт «Logout» повертає користувача на сторінку входу', async ({
    page,
  }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();

    const logoutButton = page.getByRole('button', { name: 'Logout' });
    await expect(logoutButton).toBeVisible();
    await logoutButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
  });
});
