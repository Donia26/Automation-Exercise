class HomePage {
    visit() {
      cy.visit("/");
    }
  
    verifyPageLoaded() {
      cy.url().should("include", "/");
      cy.contains("h1", "Full-Fledged practice website for Automation Engineers").should("be.visible");
    }
  
    clickOnNavItem(itemName) {
      cy.get("nav a").contains(itemName).click();
    }
  }
  
  export default HomePage;