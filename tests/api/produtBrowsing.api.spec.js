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

