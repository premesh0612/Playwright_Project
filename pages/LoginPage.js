import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {

        this.page = page;

        this.username = page.locator('input[name="username"]');

        this.password = page.locator('input[name="password"]');

        this.loginButton = page.locator('button[type="submit"]');

    }

    async openApplication() {

        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

    }

    async login(username, password) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginButton.click();

        // Wait for Dashboard URL
        await this.page.waitForURL(/dashboard/, {
            timeout: 30000
        });

    }

}