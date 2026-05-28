export class BasePage {

  constructor(page) {

    this.page = page;

  }

  async openUrl(url) {

    await this.page.goto(url);

  }

}