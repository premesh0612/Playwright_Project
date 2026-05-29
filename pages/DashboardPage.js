import { expect } from '@playwright/test';

export class DashboardPage {

    constructor(page) {

        this.page = page;

        this.dashboardText = page.locator('//h6[text()="Dashboard"]');

    }

    async verifyDashboard() {

        await this.page.waitForURL(/dashboard/, {
            timeout: 30000
        });

        await expect(
            this.dashboardText
        ).toBeVisible({
            timeout: 30000
        });

        console.log("Dashboard Verified Successfully");

    }

}