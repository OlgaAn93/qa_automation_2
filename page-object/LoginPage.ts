import { BasePage } from "../page-object/BasePage";

class LoginPage extends BasePage {
    static async login(username, password) {
        await page.locator('#email').fill(username);

        await page.locator('#password').fill(password);

        await page.getByText('Sign in').click();
    };

    static async logout() {
        await page.getByText('Sign out').click();
    };

    static async clearInput() {
        await page.locator('#email').clear();
        await page.locator('#password').clear();
	}
}

export default LoginPage;