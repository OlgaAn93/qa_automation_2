import { Page } from "@playwright/test";
import BasePage  from "../page-object/BasePage";

class LoginPage extends BasePage {
   /*  constructor(page: Page) {
        super(page);
    } */
    static async login(page: Page, username: string, password: string) {

        await page.goto('/login');

        await page.locator('#userName').fill(username);

        await page.locator('#password').fill(password);

        await page.locator('#login').click();
    };

    static async logout(page: Page) {
        await page.getByText('Log out').click();
    };

    static async clearInput(page: Page) {
        await page.locator('#userName').clear();
        await page.locator('#password').clear();
	}
}

export default LoginPage;