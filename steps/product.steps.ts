import { Then } from "@cucumber/cucumber";
import { getPage } from "../playwrightUtilities";
import { Product } from "../pages/product.page";

Then("I will add the backpack to the cart", async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then("Select the cart", async () => {
  await new Product(getPage()).selectCart();
});

Then("Select Checkout", async () => {
  await new Product(getPage()).selectCheckout();
});

Then(
  "Fill in the First Name, Last Name, and Zip as {string}, {string} and {string}",
  async (fname, lname, zip) => {
    await new Product(getPage()).fillCustomerDetails(fname, lname, zip);
  }
);

Then("Select Finish", async () => {
  await new Product(getPage()).selectFinish();
});

Then("Validate the text {string}", async (expectedMessage) => {
  await new Product(getPage()).validateCheckoutMessage(expectedMessage);
});

Then("Sort the items by high to low", async () => {
  await new Product(getPage()).selectSortHiLo();
});

Then("Sort the items by low to high", async () => {
  await new Product(getPage()).selectSortLoHi();
});

Then("Validate products sorted", async () => {
  await new Product(getPage()).validateSort();
});
