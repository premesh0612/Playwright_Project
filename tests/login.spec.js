import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test('OrangeHRM Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const dashboardPage = new DashboardPage(page);

    await loginPage.openApplication();

    await loginPage.login('Admin', 'admin123');

    await dashboardPage.verifyDashboard();

});