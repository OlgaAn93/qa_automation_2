import { Page } from "@playwright/test";
import BasePage  from "./BasePage";

class CheckBoxPage extends BasePage {
    static checkbox = '[id="tree-node-home"]';
    static toggle = '[aria-label="Toggle"]'
    static checkboxDesktop = '[id="tree-node-desktop"]';
    static checkboxDocuments = '[id="tree-node-documents"]'

    static async setChecked (page: Page){
        await page.locator(CheckBoxPage.checkbox).setChecked(true);
    };

    static async setUnChecked (page: Page) {
        await page.locator(CheckBoxPage.checkbox).uncheck();
    };

    static async expandDirectoriesTree (page: Page) {
        await page.locator(CheckBoxPage.toggle).click({ force: true });
    };

    static async setCheckedDesktop (page: Page){
        await page.locator(CheckBoxPage.checkboxDesktop).setChecked(true);
    };
}

export default CheckBoxPage; 