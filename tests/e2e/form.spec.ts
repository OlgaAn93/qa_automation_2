import { test, expect } from '@playwright/test';
import FormPage from "../../page-object/FormPage";

let firstNameTest = 'Olga'
let lastNameTest = 'Test';
let email = process.env.DEFAULT_USERNAME1 || '';
let mobNumber = '1234567890';
let address = 'Ukraine';

test.beforeEach(async ({ page }) => {
    await page.goto('/automation-practice-form');
});

test('fill form correctly', async ({ page }) => {
    await FormPage.fillForm(page, firstNameTest, lastNameTest, email, mobNumber, address);
    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
    await page.waitForSelector('[class="table table-dark table-striped table-bordered table-hover"]');
    await expect(page.getByText(firstNameTest)).toBeVisible();
    await expect(page.getByText(lastNameTest)).toBeVisible();
    await expect(page.getByText(email)).toBeVisible();
    await expect(page.getByText(mobNumber)).toBeVisible();
    await expect(page.getByText(address)).toBeVisible();
});

test('fill form incorrectly with no name, lastname, email, phone number and address', async ({ page }) => {
    await FormPage.fillForm(page, '', '', '', '', '');
    await expect(page.getByText('Thanks for submitting the form')).not.toBeVisible();

});

