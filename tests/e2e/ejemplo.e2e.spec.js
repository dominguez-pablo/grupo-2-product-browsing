import { test, expect } from '@playwright/test';
import { WEB } from '../helpers';

test('TC-E2E - Flujo Completo: Navegar Categorías, Validar Productos y Ver Detalles', async ({ page }) => {
  
  // 1. Navegar a la página principal
  await page.goto(`${WEB}`);
  await expect(page.locator('.card-title').first()).toBeVisible();

  // 2. Navegar a categoría Phones
  await page.getByRole('link', { name: 'Phones' }).click();
  
  const productosPhones = page.locator('.card-title');
  await expect(productosPhones.first()).toBeVisible();
  console.log('✓ Se cargaron correctamente los productos de Phones');

  // 3. Volver al home desde Phones
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  
  await expect(page.locator('.card-title').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Phones' })).toBeVisible();
  console.log('✓ Se volvió al home correctamente desde Phones');

  // 4. Navegar a categoría Laptops
  await page.getByRole('link', { name: 'Laptops' }).click();
  
  const productosLaptops = page.locator('.card-title');
  await expect(productosLaptops.first()).toBeVisible();
  console.log('✓ Se cargaron correctamente los productos de Laptops');

  // 5. Volver al home desde Laptops
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  
  await expect(page.locator('.card-title').first()).toBeVisible();
  console.log('✓ Se volvió al home correctamente desde Laptops');

  // 6. Navegar a categoría Monitors
  await page.getByRole('link', { name: 'Monitors' }).click();
  
  const productosMonitors = page.locator('.card-title');
  await expect(productosMonitors.first()).toBeVisible();
  console.log('✓ Se cargaron correctamente los productos de Monitors');

  // 7. Volver al home desde Monitors
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  
  await expect(page.locator('.card-title').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Phones' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Laptops' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Monitors' })).toBeVisible();
  console.log('✓ Se volvió al home correctamente desde Monitors');

  // 8. Validar nombre y precio de un producto en el home
  
  const nombreProducto = page.locator('.card-title a').first();
  const precioProducto = page.locator('.card-block h5').first();

  await expect(nombreProducto).toBeVisible();
  await expect(precioProducto).toBeVisible();
  
  const nombreTexto = await nombreProducto.textContent();
  const precioTexto = await precioProducto.textContent();
  
  console.log(`✓ Producto encontrado: ${nombreTexto} - Precio: ${precioTexto}`);

  // 9. Abrir detalle del producto
  await page.locator('.card-title a').first().click();
  
  await expect(page.getByRole('link', { name: 'Add to cart' })).toBeVisible();
  
  const tituloDetalle = page.locator('h2').first();
  const descripcion = page.locator('.description').first();
  
  await expect(tituloDetalle).toBeVisible();
  console.log('✓ Se abrió correctamente el detalle del producto');

  // 10. Validar información del producto en detalle
  const tituloTexto = await tituloDetalle.textContent();
  console.log(`✓ Detalle del producto: ${tituloTexto}`);

  // 11. Volver al catálogo desde el detalle
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
  
  await expect(page.locator('.card-title').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Laptops' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Monitors' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Phones' })).toBeVisible();
  
  console.log('✓ Se volvió al catálogo correctamente desde el detalle');

  // ✓ Flujo completo finalizado exitosamente
  console.log('\n✅ FLUJO E2E COMPLETO EXITOSO - Todos los pasos se ejecutaron correctamente');
});
