const { test } = require('@playwright/test');
const XLSX = require('xlsx');

test('Login Test Using Excel Data', async ({ page }) => {

    // Read Excel File
    const workbook = XLSX.readFile('testdata/loginData.xlsx');

    // Read Sheet
    const sheet = workbook.Sheets['Sheet1'];

    // Convert Excel Data to JSON
    const data = XLSX.utils.sheet_to_json(sheet);

    // Open Website
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Fill Username
    await page.locator('//input[@name="username"]').fill(data[0].username);

    // Fill Password
    await page.locator('//input[@name="password"]').fill(data[0].password);

    // Click Login
    await page.locator('//button[@type="submit"]').click();

    // Wait
    await page.waitForTimeout(3000);

});