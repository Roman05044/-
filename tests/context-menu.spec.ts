import { test, expect } from '@playwright/test';

test.describe('Контекстне меню (Варіант 5)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/context_menu');
  });

  test('сторінка містить заголовок, інструкції та активну область контекстного меню', async ({
    page,
  }) => {
    await expect(
      page.getByRole('heading', { name: 'Context Menu' }),
    ).toBeVisible();
    await expect(page.locator('.example p').first()).toContainText(
      'Context menu items are custom additions that appear in the right-click menu.',
    );

    const hotSpot = page.locator('#hot-spot');
    await expect(hotSpot).toBeVisible();
  });

  test('виклик контекстного меню правою кнопкою на області викликає JS alert із очікуваним текстом', async ({
    page,
  }) => {
    let dialogType = '';
    let dialogMessage = '';

    page.once('dialog', async (dialog) => {
      dialogType = dialog.type();
      dialogMessage = dialog.message();
      await dialog.accept();
    });

    await page.locator('#hot-spot').click({ button: 'right' });

    expect(dialogType).toBe('alert');
    expect(dialogMessage).toBe('You selected a context menu');
  });
});
