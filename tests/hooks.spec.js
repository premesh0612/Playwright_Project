import { test, expect } from '@playwright/test';

let context;
let page;

// Increase Timeout
test.setTimeout(60000);

// Before All
test.beforeAll(async ({ browser }) => {

    console.log("Starting Test Execution");

    // Create Context
    context = await browser.newContext();

    // Create Page
    page = await context.newPage();

    // Open Website
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    // Login
    await page.locator('input[name="username"]').fill('Admin');

    await page.locator('input[name="password"]').fill('admin123');

    await page.locator('button[type="submit"]').click();

    // Verify Dashboard
    await expect(page).toHaveURL(/dashboard/);

    console.log("Login Successful");

});

// Test Case 1
test('Verify Dashboard', async () => {

    console.log("TC-01");

    await expect(
        page.locator('//h6[text()="Dashboard"]')
    ).toBeVisible();

});

// Test Case 2
test('Verify Admin Page', async () => {

    console.log("TC-02");

    await page.locator('//span[text()="Admin"]').click();

    await expect(page).toHaveURL(/admin/);

});

// After All
test.afterAll(async () => {

    // Logout
    await page.locator('.oxd-userdropdown-tab').click();

    const logoutBtn = page.locator('//a[text()="Logout"]');

    await logoutBtn.waitFor({
        state: 'visible'
    });

    await logoutBtn.click();

    await expect(page).toHaveURL(/login/);

    console.log("Logout Successful");

    // Close Context
    await context.close();

    console.log("All Tests Completed");

});