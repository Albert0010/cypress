// import {expect} from "chai";
// import {config} from "../../wdio.conf.js"
import { paths, cssProperties } from "../_helper/constants.js";
import buttonPage from "../page-objects/button.page.js";
const baseUrl = Cypress.config().baseUrl;

describe("Button hover check", () => {
  before(async () => {
    await buttonPage.navigatePages(baseUrl);
  });

  Object.values(paths).forEach(({paths})=>{
      paths.forEach(async (path)=>{
          it('should navigate all pages properly and check buttons hover',async () => {
              await buttonPage.navigatePages(`${baseUrl}${path}`);
              const locator = buttonPage.getButton;
               await cy.get(locator)
                  .then(($elements) => {
                  // Do something with the elements here
                  // For example, logging the number of elements
                  cy.log('log',$elements.eq(0));
                  cy.wrap($elements.eq(0)).waitForElementToBeVisible();
              });
              // if(isButtonExisted){
              //     await button.trigger('mouseover');
              //     const {parsed:{hex}} = await buttonPage.getCssPropertyBgColor;
              //     expect(hex).eql(cssProperties.hoverValueLight);
              // }else{
              //

              // }
              // await browser.pause(2000);
          })
      })
  });

  it("should click up top button and scroll properly", async (script, args) => {
    cy.window().then((win) => {
      win.scrollBy(0, 1000); // Scroll by 1000 pixels vertically, adjust as needed
    });
    await buttonPage.upToButton.click();

    cy.window().then((win) => {
      cy.wrap(win.scrollY === 0).should("be.true");
    });
  });
});
