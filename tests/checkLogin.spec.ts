import { test, expect } from '@playwright/test';
import { LoginPage } from "../page-object/LoginPage";

let url = process.env.baseURL;
let username = process.env.defaultUsername;
let password = process.env.defaultPassword;

test('login', async ({ page }) => {
    LoginPage.login(username, password);

    await expect(page.getByText(`Hello, ${username}`)).toBeVisible();
});

test('logout', async ({ page }) => {
    LoginPage.logout();

    await expect(page.getByRole('button', { name: 'Login' }).toBeVisible());
});

test('should try to login with invalid credentials - username', async({page}) => {
    LoginPage.login('invalid@login.com', 'Test1234');
    await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
    LoginPage.clearInput();
});

test('should try to login with invalid credentials - both username & password', async({page}) => {
    LoginPage.login('invalid@login.com', 'Invalid');
    await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
});
