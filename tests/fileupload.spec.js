import { test, expect } from '@playwright/test';

test('File Upload Demo', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  await page.locator('#file-upload')
            .setInputFiles('testdata/sample.pdf');

  await page.click('#file-submit');

  await expect(page.locator('h3'))
        .toHaveText('File Uploaded!');

});