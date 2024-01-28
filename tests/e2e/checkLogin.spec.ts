import { test, expect } from '@playwright/test';
import LoginPage from "../../page-object/LoginPage";

var username = process.env.DEFAULT_USERNAME||'';
var password = process.env.DEFAULT_PASSWORD||'';

test('login', async ({ page }) => {
    await LoginPage.login(page, username, password);

    console.log(page);

    await expect(page.getByText(`E-mail: ${username}`)).toBeVisible();
});

test('logout', async ({ page }) => {
    await LoginPage.logout(page);

    expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('should try to login with invalid credentials - username', async({page}) => {
    await LoginPage.login(page,'invalid@login.com', 'Test1234');
    await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
    await LoginPage.clearInput(page);
});

test('should try to login with invalid credentials - both username & password', async({page}) => {
    await LoginPage.login(page,'invalid@login.com', 'Invalid');
    await expect(page.getByText('These credentials do not match our records.')).toBeVisible();
});


