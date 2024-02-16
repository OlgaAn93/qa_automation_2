import { test, expect } from '@playwright/test';
import CheckboxPage from "../../page-object/CheckboxPage";

test.beforeAll(async ({ page }) => {
    await page.goto('/checkbox');
});

test('expect element to be checked', async ({ page }) => {
    await CheckboxPage.setChecked(page);
    await expect(page.locator(CheckboxPage.checkbox)).toBeChecked();
    await expect(page.getByText('You have selected')).toBeVisible();
});

test('expect element to be unchecked', async ({ page }) => {
    await CheckboxPage.setUnChecked(page);
    await expect(page.locator(CheckboxPage.checkbox)).not.toBeChecked();
});

test('check all directories and subdirectories', async ({ page }) => {
    await CheckboxPage.expandDirectoriesTree(page);
    await expect(page.getByText('Directories')).toBeVisible();
});

test('check nested subdirectory desktop', async ({ page }) => {
    await CheckboxPage.setCheckedDesktop(page);
    await expect(page.locator(CheckboxPage.checkboxDesktop)).toBeChecked();
    await expect(page.locator(CheckboxPage.checkboxDocuments)).toBeChecked();
});