// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import buttonPage from "../page-objects/button.page.js";
import {cssProperties} from "../_helper/constants.js";

Cypress.Commands.add("customHover", { prevSubject: "element" }, (element) => {
    // Wrap the element and trigger 'mouseover'
    const domElement = element.get(0)
    return cy.wrap(domElement).invoke('show').realHover('mouse')
    //     .then((e) => {
    //     // Use .then to work with the results of Cypress commands
    //     cy.wrap(domElement)
    //         .should('have.css', 'background-color')
    //         .then((bgColor) => {
    //             debugger
    //
    //             cy.wrap(bgColor).should('eq',cssProperties.hoverValueLight)
    //         });
    // });
});
