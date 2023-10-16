describe('Testing with Cypress', function () {
    it('should check text', function () {
        cy.visit('tenx.vercel.app');

        cy.get('.welcome_tenx .content .info :first-child :first-child')
        .invoke('text')
            .should('eq','Welcome to ');
    });

});