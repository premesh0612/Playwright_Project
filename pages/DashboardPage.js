import { expect } from '@playwright/test';

export class DashboardPage {

  constructor(page) {

    this.page = page;

    this.dashboardText = page.locator('//h6[text()="Dashboard"]');

  }

  async verifyDashboard() {

    await expect(this.dashboardText).toBeVisible();

  }

}