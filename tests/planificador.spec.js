import { test, expect } from '@playwright/test';

test('Muestra el titulo de la app', async ({ page }) => {
  await page.goto('/');
    await expect(page)./getByRole('heading', { name: 'Planificador de Tareas' }).toBeVisible();
}