import navigationPage from "../page-objects/navigation.page.js";
import {mainTitleValues, paths} from "../_helper/constants.js";

const baseUrl = Cypress.config().baseUrl;
describe('Navigation functionality',()=>{

    it('should click see all buttons and  navigate properly',  () => {
        navigationPage.navigatePages(`${baseUrl}`);
        const locator = navigationPage.getSeeAllButtons;
        cy.get(locator).then((seeAllButtonsArray)=>{
            let expectedValue = false;

            seeAllButtonsArray.each((index, elem)=>{
                cy.wrap(elem).click().then(()=>{
                    const actualTitleMessage = Cypress.$(elem).text().toLowerCase();
                    expectedValue = actualTitleMessage.toLowerCase() === mainTitleValues[index].toLowerCase();

                    navigationPage.navigatePages(`${baseUrl}`);
                })

            })
            cy.wrap(expectedValue).should('eq',true)
        })

    });



    // Object.values(paths).forEach(({paths,expectedTitle})=>{
    //     paths.forEach(async (path)=>{
    //         it('should navigate all pages properly', () => {
    //             navigationPage.navigatePages(`${baseUrl}${path}`);
    //             cy.get(navigationPage.getHomeValue).then((elem)=>{
    //                 const text = Cypress.$(elem).text().toLowerCase();
    //                 cy.wrap(text).should('eq',expectedTitle.toLowerCase())
    //             })
    //         })
    //     })
    // });
})