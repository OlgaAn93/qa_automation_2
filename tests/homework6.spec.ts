import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

    await page.goto('https://warsawsneakerstore.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/warsaw/);

});

test('find subscription text and swith to subscribe page', async ({ page }) => {

    await expect(page.getByText('Stay up to date')).toBeVisible();

    await page.getByText('Stay up to date').click();

    const elementHandle = await page.locator('#firstname').first();

    expect(elementHandle).toBeTruthy();

    const isInputElement = await elementHandle.evaluate(element => element.tagName.toLowerCase() === 'input');
    expect(isInputElement).toBe(true);

    await page.evaluate(() => {
        window.history.back();
      });

});

test('Click favourite', async ({ page }) => {
    const favouriteButton = page.locator('.button__icon');

    await favouriteButton.click();

    await expect(page.getByText('Your favourites')).toBeVisible();

    await page.evaluate(() => {
        window.history.back();
      });

});


test('Search for item', async ({ page }) => {
    const locatorSearch = page.locator('.header__button-alt-search-text');

    await locatorSearch.click();

    await locatorSearch.fill('dress');

    await page.locator('#header-search-result-link').click();

    await expect(page.getByText('Search results for "dress"')).toBeVisible();

});
