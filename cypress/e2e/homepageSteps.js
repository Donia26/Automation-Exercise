import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/HomePage";

const homePage = new HomePage();

Given("I am on the Automation Exercise homepage", () => {
  homePage.visit();
});

Then("the homepage is loaded correctly", () => {
  homePage.verifyPageLoaded();
});

When("I click on the {string} navigation item", (itemName) => {
  homePage.clickOnNavItem(itemName);
});