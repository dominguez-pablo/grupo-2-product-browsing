import {test, expect} from '@playwright/test';
import { API } from '../helpers';

test('TC01 - Navegar a categoria Phones', async ({request}) => {
  const response = await request.post(`${API}/bycat`, {
    data: { cat: 'phone' },
  });

  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data.Items.length).toBeGreaterThan(0);
  expect(data).toHaveProperty('Items');
});

test('TC02 - Navegar a categoria Laptops', async ({request}) => {
  const response = await request.post(`${API}/bycat`, {
    data: { cat: 'notebook' },
  });

  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data).toHaveProperty('Items');
  expect(data.Items.length).toBeGreaterThan(0);
});

test('TC03 - Navegar a categoria Monitors', async ({request}) => {
  const response = await request.post(`${API}/bycat`, {
    data: { cat: 'monitor' },
  });

  expect(response.status()).toBe(200);

  const data = await response.json();
  expect(data).toHaveProperty('Items');
  expect(data.Items.length).toBeGreaterThan(0);
});

test('TC05- Validar nombre y precio del producto', async ({request}) => {

  const responsePhones = await request.post(`${API}/bycat`, {
    data: { cat: 'phone' },
  })
  
  expect(responsePhones.status()).toBe(200);  
  const dataPhones = await responsePhones.json();
  expect(dataPhones).toHaveProperty('Items');
  expect(dataPhones.Items.length).toBeGreaterThan(0);

  const producto = dataPhones.Items[0].title;
  const precio = dataPhones.Items[0].price;

  expect(producto).toBeTruthy();
  expect(precio).toBeTruthy();
  console.log('tipo de dato de precio:', typeof precio);
  expect(typeof precio).toBe('number');
  expect(precio).toBeGreaterThan(0);

  const responseLaptops = await request.post(`${API}/bycat`, {
    data: { cat: 'notebook' },
  });
  
  expect(responseLaptops.status()).toBe(200);  
  const dataLaptops = await responseLaptops.json();
  expect(dataLaptops).toHaveProperty('Items');
  expect(dataLaptops.Items.length).toBeGreaterThan(0);

  const productoLaptop = dataLaptops.Items[0].title;
  const precioLaptop = dataLaptops.Items[0].price;

  expect(productoLaptop).toBeTruthy();
  expect(precioLaptop).toBeTruthy();
    console.log('tipo de dato de precio:', typeof precio);
  expect(typeof precioLaptop).toBe('number');
  expect(precioLaptop).toBeGreaterThan(0);

  const responseMonitors = await request.post(`${API}/bycat`, {
    data: { cat: 'monitor' },
  });
  
  expect(responseMonitors.status()).toBe(200);  
  const dataMonitors = await responseMonitors.json();
  expect(dataMonitors).toHaveProperty('Items');
  expect(dataMonitors.Items.length).toBeGreaterThan(0);

  const productoMonitor = dataMonitors.Items[0].title;
  const precioMonitor = dataMonitors.Items[0].price;

  expect(productoMonitor).toBeTruthy();
  expect(precioMonitor).toBeTruthy();
  console.log('tipo de dato de precio:', typeof precio);
  expect(typeof precioMonitor).toBe('number');
  expect(precioMonitor).toBeGreaterThan(0);
});