export class Page{
    async open(path){
        // await browser.maximizeWindow();
        return cy.visit(path)
    }
}