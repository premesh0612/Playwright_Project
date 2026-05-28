// @ts-check
import { test, expect } from '@playwright/test';

test('check categories', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    await page.waitForTimeout(3000);

    const element = page.getByRole('link', { name: 'Phones' });

    await element.screenshot({ path: 'screenshots/phones.png' });

});