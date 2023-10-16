import {cssProperties} from "../_helper/constants.js";
import {
    Page
} from "./page.js";

class ButtonPage extends Page {
    async navigatePages(path){
        await  super.open(path);
    }
    get getButton(){
        return (".book-btn");
    }

    // get getCssPropertyBgColor(){
    //     return this.getButton.getCSSProperty(cssProperties.bgColor);
    // }
    get getSeeAllButtons(){
        return (".allBtn");
    }

    get upToButton(){
        return ('#return-to-top');
    }

}

export default new ButtonPage();