import { test, expect } from '@playwright/test';
import LoginPage from "../../page-object/LoginPage";

var username = process.env.DEFAULT_USERNAME||'';
var password = process.env.DEFAULT_PASSWORD||'';

test('login', async ({ page }) => {
    await LoginPage.login(page, username, password);

    await expect(page.getByText('practicetestautomation.com/logged-in-successfully/')).toBeVisible();
});

test('logout', async ({ page }) => {
    await LoginPage.login(page, username, password);

    await LoginPage.logout(page);

    await expect(page.getByText('Test login')).toBeVisible();
});

test('should try to login with invalid credentials - username', async({page}) => {
    await LoginPage.login(page,'incorrectUser', password);
    await expect(await page.getByText('Your username is invalid!').count()).toBeGreaterThan(1);
    await LoginPage.clearInput(page);
});

test('should try to login with invalid credentials - both username & password', async({page}) => {
    await LoginPage.login(page, username, 'incorrectPassword');
    await expect(page.getByText('Your password is invalid!')).toBeVisible();
});


