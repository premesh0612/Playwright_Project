import { test, expect } from '@playwright/test';

test('frame', async ({ page }) => {

    await page.goto('https://docs.oracle.com/javase/8/docs/api/');
    
    await page.waitForTimeout(3000);

    await page
        .frameLocator('//frame[@name="classFrame"]')
        .locator("//a[normalize-space()='compact1']")
        .click();

    await page.waitForTimeout(5000);

});

test('frame second', async ({ page }) => {

    await page.goto('https://letcode.in/frame');

    await page.waitForTimeout(5000);

    await page
      .frameLocator('#firstFr')
      .locator('//input[@name="fname"]')
      .fill('Prem');

    await page.waitForTimeout(5000);

});
