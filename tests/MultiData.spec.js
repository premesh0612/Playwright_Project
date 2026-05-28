const { test } = require('@playwright/test');
const XLSX = require('xlsx');

// Read Excel File
const workbook = XLSX.readFile('testdata/loginData.xlsx');

const sheet = workbook.Sheets['Sheet1'];

const data = XLSX.utils.sheet_to_json(sheet);

// Loop for Multiple Test Data
for (const user of data) {

    test(`Login Test for ${user.username}`, async ({ page }) => {

        // Open Website
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // Fill Username
        await page.locator('//input[@name="username"]').fill(user.username);

        // Fill Password
        await page.locator('//input[@name="password"]').fill(user.password);

        // Click Login
        await page.locator('//button[@type="submit"]').click();

        await page.waitForTimeout(3000);

    });

}