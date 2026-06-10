import {test, expect} from '@playwright/test';
import {WEB} from '../helpers';

test('TC01 - Navegar a categoria Phones', async ({page}) => {
  await page.goto(`${WEB}`);

  await page.getByRole('link', { name: 'Phones' }).click();

  await page.waitForTimeout(10000);


  const productos = page.locator('.card-title');
  await expect(productos.first()).toBeVisible();

});