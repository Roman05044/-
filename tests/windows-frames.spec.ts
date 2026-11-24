import { test, expect } from '@playwright/test';

test.describe('Нові вкладки та фрейми', () => {
  test('відкриття посилання в новій вкладці', async ({ page, context }) => {
    await page.goto('/windows');

    const pagePromise = context.waitForEvent('page');
    await page.getByRole('link', { name: 'Click Here' }).click();
    const newPage = await pagePromise;

    await newPage.waitForLoadState();
    await expect(newPage.locator('h3')).toHaveText('New Window');

    // Вихідна вкладка залишається доступною
    await expect(page.locator('h3')).toHaveText('Opening a new window');
    await newPage.close();
  });

  test('введення тексту у вбудованому редакторі', async ({ page }) => {
    await page.goto('/iframe');

    const editor = page.frameLocator('#mce_0_ifr').locator('#tinymce');
    await expect(editor).toBeVisible();
    await editor.evaluate((el, text) => {
      el.textContent = text;
    }, 'Текст, уведений автотестом');

    await expect(editor).toContainText('Текст, уведений автотестом');
  });
});
