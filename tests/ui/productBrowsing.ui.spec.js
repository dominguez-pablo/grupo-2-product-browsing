import {test, expect} from '@playwright/test';
import {WEB} from '../helpers';

test('TC01 - Navegar a categoria Phones', async ({page}) => {
  await page.goto(`${WEB}`);

  await page.getByRole('link', { name: 'Phones' }).click();

  await page.waitForTimeout(1000);


  const productos = page.locator('.card-title');
  await expect(productos.first()).toBeVisible();

});

test('TC02 - Navegar a categoria Laptops', async ({page}) => {
  await page.goto(`${WEB}`);

  await page.getByRole('link', { name: 'Laptops' }).click();

  await page.waitForTimeout(1000);

    const productos = page.locator('.card-title');
    await expect(productos.first()).toBeVisible();
});

test('TC03 - Navegar a categoria Monitors', async ({page}) => {
  await page.goto(`${WEB}`);

  await page.getByRole('link', { name: 'Monitors' }).click();