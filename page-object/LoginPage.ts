import { Page } from "@playwright/test";
import BasePage  from "../page-object/BasePage";

class LoginPage extends BasePage {
   /*  constructor(page: Page) {
        super(page);
    } */
    static async login(page: Page, username: string, password: string) {

        await page.goto('/');

        await page.getByText('Login').click();

        await page.locator('#email').fill(username);

        await page.locator('#password').fill(password);

        await page.getByText('Sign in').click();
    };

    static async logout(page: Page) {
        await page.getByText('Sign out').click();
    };

    static async clearInput(page: Page) {
        await page.locator('#email').clear();
        await page.locator('#password').clear();
	}
}

export default LoginPage;