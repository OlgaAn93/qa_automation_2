import { test, expect } from '@playwright/test';
import LoginPage from "../../page-object/LoginPage1";

var username = process.env.DEFAULT_USERNAME1||'';
var password = process.env.DEFAULT_PASSWORD2||'';

test('login', async ({ page }) => {
    await LoginPage.login(page, username, password);

    await expect(page.getByText(`User Name : ${username}`)).toBeVisible();
});

test('logout', async ({ page }) => {
    await LoginPage.login(page, username, password);

    await LoginPage.logout(page);

    await expect(page.getByText('Login in Book Store')).toBeVisible();
});

test('should try to login with invalid credentials - username', async({page}) => {
    await LoginPage.login(page,'incorrectUser', password);
    await expect(await page.getByText('Your username is invalid!').count()).toBeGreaterThan(1);
    await LoginPage.clearInput(page);
});

test('should try to login with invalid credentials - both username & password', async({page}) => {
    await LoginPage.login(page, username, 'incorrectPassword');
    await expect(page.getByText('Invalid username or password!')).toBeVisible();
});


