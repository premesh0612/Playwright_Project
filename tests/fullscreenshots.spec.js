// @ts-check
import { test, expect } from '@playwright/test';

test('check categories', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    await page.waitForTimeout(3000);

    await page.screenshot({ path: 'screenshots/fullhomepage.png',fullPage: true });

});