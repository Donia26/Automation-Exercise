describe('AutomationExercise', () => {
  before(function(){
      cy.fixture("example").then(function(data){
          globalThis.data = data;

      });

  });
  beforeEach(function(){
      cy.visit(data.loginPage);

  });

  it.only('[1] enter valid emailAddress and valid password', () => {
      cy.login-email().type("Alaatamer");
      cy.login-password().type("1234");
      cy.login-button()
      cy.url().should('eq','https://www.automationexercise.com/login');
  });

  it.only('[2] enter valid name and valid email', () => {
    cy.signup-name().type("Alaatamer");
    cy.signup-email().type("1234");
    cy.signup-button()
    cy.url().should('eq','https://www.automationexercise.com/login');
});
  it('[3] enter invalid emailAddress and invalid password', () => {
      cy.get('[name="name"]').type("Alaatamer");
      cy.get('[name="password"]').type("1234");
      cy.get('[type="submit"]').click();
  });

  it('[4] enter invalid name and invalid email', () => {
    cy.get('[name="name"]').type("Alaatamer");
    cy.get('[name="email"]').type("1234");
    cy.get('[type="submit"]').click();
  });
  it('[5] enter valid emailAddress and invalid password', () => {
      cy.get('[name="name"]').type("Alaatamer");
      cy.get('[name="password"]').type("1234");
      cy.get('[type="submit"]').click();
  });

  it('[6] enter valid name and invalid email', () => {
    cy.get('[name="name"]').type("Alaatamer");
    cy.get('[name="email"]').type("1234");
    cy.get('[type="submit"]').click();
  });

  it('[7] enter invalid username and valid password', () => {
      cy.get('[name="name"]').type("Alaatamer");
      cy.get('[name="password"]').type("1234");
      cy.get('[type="submit"]').click();
  });

  it('[8] enter invalid name and valid email', () => {
    cy.get('[name="name"]').type("Alaatamer");
    cy.get('[name="email"]').type("1234");
    cy.get('[type="submit"]').click();
  });

  it('[9]Check login button', () => {
      cy.get('name="login-button').click();
  });
  
  it('[10]Check login container', () => {
      cy.get('.container').click();
  });

  it('[11]Check signup container', () => {
    cy.get('.container').click();
  });
  
  it('[12] check login logo', () => {
      cy.get('.login_logo').click();
  });
  it('[13] check login form', () => {
      cy.get('.login-form').click();
  });

  it('[14] check signup form', () => {
    cy.get('.signup-form').click();
  });
  
  it('[15] Login with positive scenario', () => {
    cy.title().should('include','Automation Exercise');
    cy.get('[name="name"]').type("Alaatamer");
    cy.get('[name="password"]').type("1234");
    cy.get('[type="submit"]').click();
    cy.url().should('eq','https://www.automationexercise.com/login');
    //cy.get('body').should('be exist')
    cy.contains("all fields are required").should('be exist');
  });

  it('[16] sign up with positive scenario', () => {
    cy.title().should('include','Automation Exercise');
    cy.get('[name="name"]').type("Alaatamer");
    cy.get('[name="email"]').type("1234");
    cy.get('[type="submit"]').click();
    cy.url().should('eq','https://www.automationexercise.com/login');
    //cy.get('body').should('be exist')
    cy.contains("all fields are required").should('be exist');
  });

  it('[17] Login with negative scenario', () => {
    cy.get('[name="name"]').type("Alaatamer");
    cy.get('[name="password"]').type("1234");
    cy.get('[type="submit"]').click();
    cy.contains("Error: all fields are required").should ('be exist');
}); 

it('[18] Login with negative scenario', () => {
  cy.get('[name="name"]').type("Alaatamer");
  cy.get('[name="email]').type("1234");
  cy.get('[type="submit"]').click();
  cy.contains("Error: all fields are required").should ('be exist');
}); 

  // Custom commands
  it('[19] Login', (username, password) => {
    cy.visit('https://www.automationexercise.com/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  it('[20] searchProduct', (productName) => {
    cy.get('#search_query_top').type(productName);
    cy.get('#searchbox > .btn').click();
  });

  // Page objects
  class LoginPage {
    visit() {
      cy.visit('https://www.automationexercise.com/login');
    }
  
    fillUsername(username) {
      cy.get('#username').type(username);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  class HomePage {
    visit() {
      cy.visit('https://www.automationexercise.com/');
    }
  
    searchProduct(productName) {
      cy.get('#search_query_top').type(productName);
      cy.get('#searchbox > .btn').click();
    }
  
    selectProduct(productName) {
      cy.contains(productName).click();
    }
  
    addToCart() {
      cy.get('.add-to-cart').click();
    }
  
    checkout() {
      cy.get('.btn > span').contains('Proceed to checkout').click();
    }
  }
  
  // Step definitions using Cypress Cucumber
  const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');
  
  Given('I am logged in as {string} with password {string}', (username, password) => {
    cy.login(username, password);
  });
  
  When('I search for {string} product', (productName) => {
    cy.searchProduct(productName);
  });
  
  When('I select {string} product', (productName) => {
    const homePage = new HomePage();
    homePage.selectProduct(productName);
  });
  
  When('I add product to cart', () => {
    const homePage = new HomePage();
    homePage.addToCart();
  });
  
  When('I checkout', () => {
    const homePage = new HomePage();
    homePage.checkout();
  });
  
  Then('I should see product {string} in cart', (productName) => {
    cy.contains(productName).should('be.visible');
  });
  
  Then('I should be redirected to login page', () => {
    cy.url().should('equal', 'https://www.automationexercise.com/login');
  });
 
});