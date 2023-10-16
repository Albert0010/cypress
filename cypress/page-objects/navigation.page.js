import {
    Page
} from "./page.js";

class NavigationPage extends Page {
     async navigatePages(path){
        await  super.open(path);
    }
    get getHomeValue(){
         return $(".mainTitle");
    }

    get getSeeAllButtons(){
         return $$(".allBtn a");
    }
}

export default new NavigationPage();