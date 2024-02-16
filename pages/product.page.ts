import { Page } from "@playwright/test";

export class Product {
  private readonly page: Page;
  private readonly addToCart: string =
    'button[id="add-to-cart-sauce-labs-backpack"]';
  private readonly cart = '[class="shopping_cart_link"]';
  private readonly checkoutBtn = '[id="checkout"]';
  private readonly fNameField = 'input[id="first-name"]';
  private readonly lNameField = 'input[id="last-name"]';
  private readonly zipField = 'input[id="postal-code"]';
  private readonly continueBtn = 'input[id="continue"]';
  private readonly finishBtn = '[id="finish"]';
  private readonly sort = '[class="product_sort_container"]';
  private readonly sortLowtoHigh = "lohi";
  private readonly sortHightoLow = "hilo";

  constructor(page: Page) {
    this.page = page;
  }

  public async addBackPackToCart() {
    await this.page.locator(this.addToCart).click();
  }

  public async selectCart() {
    await this.page.locator(this.cart).click();
  }

  public async selectCheckout() {
    await this.page.locator(this.checkoutBtn).click();
  }

  public async fillCustomerDetails(fname: string, lname: string, zip: string) {
    await this.page.locator(this.fNameField).fill(fname);
    await this.page.locator(this.lNameField).fill(lname);
    await this.page.locator(this.zipField).fill(zip);
    await this.page.locator(this.continueBtn).click();
  }

  public async selectFinish() {
    await this.page.locator(this.finishBtn).click();
  }

  public async validateCheckoutMessage(expectedMessage: string) {
    const pageTitle = await this.page
      .locator('[class="complete-header"]')
      .textContent();
    if (pageTitle !== expectedMessage) {
      throw new Error(
        `Expected title to be ${expectedMessage} but found ${pageTitle}`
      );
    }
  }

  // public async selectSort(sortBy: string) {
  //   const element = await this.page.locator(this.sort);
  //   if (sortBy == "low to high") element.selectOption(this.sortLowtoHigh);
  //   else if (sortBy == "high to low") element.selectOption(this.sortHightoLow);
  //   else {
  //     throw new Error(`Sort option ${sortBy} not found`);
  //   }
  // }

  public async selectSortHiLo() {
    await this.page.locator(this.sort).selectOption(this.sortHightoLow);
  }

  public async selectSortLoHi() {
    await this.page.locator(this.sort).selectOption(this.sortHightoLow);
  }

  public validateSort() {}
}
