import {expect, type Locator, type Page} from '@playwright/test';

class BasePage {
    /*page: Page;

    constructor(pageParam: Page) {
        this.page = pageParam;
    }; */

    static async pause(page: Page, milliseconds: number) {
        await page.waitForTimeout(milliseconds);
    }

}

export default BasePage;