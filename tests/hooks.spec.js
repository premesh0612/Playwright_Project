/* import { test, expect } from '@playwright/test';


test.beforeAll(async () => {
    console.log("Application Started");
});

test.afterAll(async () => {
    console.log("All Tests Finished");
});


test.beforeEach(async () => {
    
    console.log("Opening Website");
});

test.afterEach(async () => {
    console.log("Test Completed");
});



test('Verify Title', async ( ) => {
    console.log("TC-01");
});

test('Verify URL', async ( ) => {
    console.log("TC-02");
});

*/
/*
import { test, expect } from '@playwright/test';

// Increase timeout for all tests
test.setTimeout(60000);

// Before all tests
test.beforeAll(async () => {

    console.log("Starting Test Execution");

});

// Before every test
test.beforeEach(async ({ page }) => {

    // Open Website
    await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );

    // Wait for Username field
    await page.locator('input[name="username"]').waitFor({
        state: 'visible'
    });

    // Enter Username
    await page.locator('input[name="username"]').fill('Admin');

    // Enter Password
    await page.locator('input[name="password"]').fill('admin123');

    // Click Login Button
    await page.locator('button[type="submit"]').click();

    // Verify Dashboard loaded
    await expect(page).toHaveURL(/dashboard/);

    console.log("Login Successful");

});

// Test Case 1
test('Verify Dashboard', async ({ page }) => {

    console.log("TC-01");

    // Verify Dashboard Heading
    await expect(
        page.locator('//h6[text()="Dashboard"]')
    ).toBeVisible();

});

// Test Case 2
test('Verify Admin Page', async ({ page }) => {

    console.log("TC-02");

    // Click Admin Menu
    await page.locator('//span[text()="Admin"]').click();

    // Verify Admin URL
    await expect(page).toHaveURL(/admin/);

});

// After every test
test.afterEach(async ({ page }) => {

    // Click Profile Dropdown
    await page.locator('.oxd-userdropdown-tab').click();

    // Logout Locator
    const logoutBtn = page.locator('//a[text()="Logout"]');

    // Wait for Logout button
    await logoutBtn.waitFor({
        state: 'visible'
    });

    // Click Logout
    await logoutBtn.click();

    // Verify Login Page
    await expect(page).toHaveURL(/login/);

    console.log("Logout Successful");

});

// After all tests
test.afterAll(async () => {

    console.log("All Tests Completed");

});


*/

import { test, expect } from '@playwright/test';

let page;

// Increase Timeout
test.setTimeout(60000);

// Before All
test.beforeAll(async ({ browser }) => {

    console.log("Starting Test Execution");

    // Open Browser Only Once
    page = await browser.newPage();

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

    // Click Admin Menu
    await page.locator('//span[text()="Admin"]').click();

    // Verify Admin URL
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

    console.log("Logout Successful");

    // Close Browser Only Once
    await page.close();

    console.log("All Tests Completed");

});