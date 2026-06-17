import { test, expect } from '@playwright/test';
import { WEB, API } from '../helpers';

test('TC-E2E - Flujo Completo: Navegar Categorías, Validar Productos y Ver Detalles', async ({
  page,
  request,
}) => {

  // 4. Navegar a la página principal
  await page.goto(`${WEB}`);
  await expect(page.locator('.card-title').first()).toBeVisible();

  // 5. Navegar a categoría Phones
  await page.getByRole('link', { name: 'Phones' }).click();

  const productosPhones = page.locator('.card-title');
  await expect(productosPhones.first()).toBeVisible();
  console.log('✓ Se cargaron correctamente los productos de Phones en UI');

  // 1. Validar API - Obtener productos de Phones
  const responsePhones = await request.post(`${API}/bycat`, {
    data: { cat: 'phone' },
  });
  expect(responsePhones.status()).toBe(200);
  const dataPhones = await responsePhones.json();
  expect(dataPhones).toHaveProperty('Items');
  expect(dataPhones.Items.length).toBeGreaterThan(0);
  const phoneData = dataPhones.Items[0];
  console.log(
    `✓ API validada - Phones: ${phoneData.title} - $${phoneData.price}`,
  );

  // 6. Volver al home desde Phones
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();

  await expect(page.locator('.card-title').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Phones' })).toBeVisible();
  console.log('✓ Se volvió al home correctamente desde Phones');

  // 7. Navegar a categoría Laptops
  await page.getByRole('link', { name: 'Laptops' }).click();

  const productosLaptops = page.locator('.card-title');
  await expect(productosLaptops.first()).toBeVisible();
  console.log('✓ Se cargaron correctamente los productos de Laptops en UI');

  // 2. Validar API - Obtener productos de Laptops
  const responseLaptops = await request.post(`${API}/bycat`, {
    data: { cat: 'notebook' },
  });
  expect(responseLaptops.status()).toBe(200);
  const dataLaptops = await responseLaptops.json();
  expect(dataLaptops).toHaveProperty('Items');
  expect(dataLaptops.Items.length).toBeGreaterThan(0);
  const laptopData = dataLaptops.Items[0];
  console.log(
    `✓ API validada - Laptops: ${laptopData.title} - $${laptopData.price}`,
  );

  // 8. Volver al home desde Laptops
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();

  await expect(page.locator('.card-title').first()).toBeVisible();
  console.log('✓ Se volvió al home correctamente desde Laptops');

  // 9. Navegar a categoría Monitors
  await page.getByRole('link', { name: 'Monitors' }).click();

  const productosMonitors = page.locator('.card-title');
  await expect(productosMonitors.first()).toBeVisible();
  console.log('✓ Se cargaron correctamente los productos de Monitors en UI');

  // 3. Validar API - Obtener productos de Monitors
  const responseMonitors = await request.post(`${API}/bycat`, {
    data: { cat: 'monitor' },
  });
  expect(responseMonitors.status()).toBe(200);
  const dataMonitors = await responseMonitors.json();
  expect(dataMonitors).toHaveProperty('Items');
  expect(dataMonitors.Items.length).toBeGreaterThan(0);
  const monitorData = dataMonitors.Items[0];
  console.log(
    `✓ API validada - Monitors: ${monitorData.title} - $${monitorData.price}`,
  );

  // 10. Volver al home desde Monitors
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();

  await expect(page.locator('.card-title').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Phones' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Laptops' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Monitors' })).toBeVisible();
  console.log('✓ Se volvió al home correctamente desde Monitors');

  // 11. Validar nombre y precio de un producto en el home

  const nombreProducto = page.locator('.card-title a').first();
  const precioProducto = page.locator('.card-block h5').first();

  await expect(nombreProducto).toBeVisible();
  await expect(precioProducto).toBeVisible();

  const nombreTexto = await nombreProducto.textContent();
  const precioTexto = await precioProducto.textContent();

  console.log(`✓ Producto en UI: ${nombreTexto} - Precio: ${precioTexto}`);

  // 12. Abrir detalle del producto
  await page.locator('.card-title a').first().click();

  await expect(page.getByRole('link', { name: 'Add to cart' })).toBeVisible();

  const tituloDetalle = page.locator('h2').first();
  const descripcion = page.locator('.description').first();

  await expect(tituloDetalle).toBeVisible();
  console.log('✓ Se abrió correctamente el detalle del producto');

  // 13. Validar información del producto en detalle
  const tituloTexto = await tituloDetalle.textContent();
  console.log(`✓ Detalle del producto: ${tituloTexto}`);

  // 14. Volver al catálogo desde el detalle
  await page.getByRole('link', { name: 'PRODUCT STORE' }).click();

  await expect(page.locator('.card-title').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Laptops' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Monitors' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Phones' })).toBeVisible();

  console.log('✓ Se volvió al catálogo correctamente desde el detalle');

  // ✓ Flujo completo finalizado exitosamente
  console.log(
    '\n✅ FLUJO E2E COMPLETO EXITOSO - API + UI validados - Todos los pasos se ejecutaron correctamente',
  );
});
