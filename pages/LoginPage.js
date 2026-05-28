import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {

  constructor(page) {

    super(page);

    this.username = page.locator('input[name="username"]');

    this.password = page.locator('input[name="password"]');

    this.loginBtn = page.locator('button[type="submit"]');

  }

  async openApplication() {

    await this.openUrl('https://opensource-demo.orangehrmlive.com/');

  }

  async login(username, password) {

    await this.username.fill(username);

    await this.password.fill(password);

    await this.loginBtn.click();

  }

}