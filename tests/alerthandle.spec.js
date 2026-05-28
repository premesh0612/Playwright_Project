import { test, expect } from '@playwright/test';

test('popup handling', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept('premesh');

        
    });

    await page.locator('button:has-text("Click for JS Prompt")').click();

    await page.waitForTimeout(3000);

});