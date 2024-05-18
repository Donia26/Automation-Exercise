describe('how to attach file', () => {
    it('[1] attaching pdf file', () => {
        cy.visit('https://www.automationexercise.com/login')
        cy.get('#myFile').attachFiles('pdf-test.pdf')
        cy.get('#signup-button').click
    });
});