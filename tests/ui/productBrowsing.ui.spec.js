import {test, expect} from '@playwright/test';
import {WEB} from '../helpers';
/*

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

  await page.waitForTimeout(1000);

    const productos = page.locator('.card-title');
    await expect(productos.first()).toBeVisible();
});
*/


test('TC04 - Volver al Home desde categoria', async ({ page }) => {
  await page.goto(`${WEB}`);

  // Entrar a una categoria
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.waitForTimeout(1000);

  // Volver al Home con el logo / link principal
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();

  // Verificar que volvimos: deben verse las categorias de nuevo
  await expect(page.getByRole('link', { name: 'Laptops' })).toBeVisible();
});

test('TC05 - Validar nombre y precio del producto', async ({page}) => {
  await page.goto(`${WEB}`);
  await page.waitForTimeout(1000);

  const producto = page.locator('.card-title').first();
  const precio = page.locator('.card-block h5').first();

  await expect(producto).toBeVisible();
  await expect(precio).toBeVisible();
});
  
test('TC06 - Abrir detalle de producto', async ({ page }) => {
  await page.goto(`${WEB}`);

  // Click en el primer producto
  await page.locator('.card-title a').first().click();

  // En el detalle se ve el boton Add to cart
  await expect(page.getByRole('link', { name: 'Add to cart' })).toBeVisible();
});