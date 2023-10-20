// import {expect} from "chai";
// import {config} from "../../wdio.conf.js"
import { paths, cssProperties } from "../_helper/constants.js";
import buttonPage from "../page-objects/button.page.js";
const baseUrl = Cypress.config().baseUrl;

describe("Button hover check", () => {
  // before(async () => {
  //   await buttonPage.navigatePages(baseUrl);
  // });

  Object.values(paths).forEach(({paths})=>{
      paths.forEach(async (path)=>{
          it('should navigate all pages properly and check buttons hover', () => {
              buttonPage.navigatePages(`${baseUrl}${path}`);
              const locator = buttonPage.getButton;

                cy
                  .get(locator, { failOnStatusCode: false })
                  .then(($elements) => {
                          cy
                              .wrap($elements.eq(0))
                              .customHover()
                              .should('have.css', 'background-color')
                              .then((bgColor) => {
                                  cy.wrap(bgColor).should('eq',cssProperties.hoverValueLight)
                              });
              });
          })
      })
  });

  it("should click up top button and scroll properly",  (script, args) => {
    cy.window().then((win) => {
      win.scrollBy(0, 1000); // Scroll by 1000 pixels vertically, adjust as needed
    });
     buttonPage.upToButton.click();

    cy.window().then((win) => {
      cy.wrap(win.scrollY === 0).should("be.true");
    });
  });
});
