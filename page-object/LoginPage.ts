import { Page } from "@playwright/test";
import BasePage  from "../page-object/BasePage";

class LoginPage extends BasePage {
   /*  constructor(page: Page) {
        super(page);
    } */
    static async login(page: Page, username: string, password: string) {

        await page.goto('/practice-test-login');

        //await page.getByText('Login').click();

        await page.locator('#username').fill(username);

        await page.locator('#password').fill(password);

        await page.locator('#submit').click();
    };

    static async logout(page: Page) {
        await page.getByText('Log out').click();
    };

    static async clearInput(page: Page) {
        await page.locator('#username').clear();
        await page.locator('#password').clear();
	}
}

export default LoginPage;