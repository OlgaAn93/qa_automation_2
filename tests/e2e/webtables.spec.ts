import { test, expect } from '@playwright/test';
import WebTablesPage from '../../page-object/WebTablesPage';

let firstNameTest = 'Olga'
let lastNameTest = 'Test';
let email = process.env.DEFAULT_USERNAME1 || '';
let age = getRandomAge (18, 65);
let salary = getRandomSalary (1000, 6000);
let department = 'Information Technology';

function getRandomAge(minAge: number, maxAge: number): string {
    const randomAge = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
    return randomAge.toString();
}

function getRandomSalary(minSalary: number, maxSalary: number): string {
    
    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    return randomSalary.toString();
}

test.beforeEach(async ({ page }) => {
    await page.goto('/webtables');
});

test.only('add new record', async ({ page }) => {
    await WebTablesPage.addNewRecord(page, firstNameTest, lastNameTest, email, age, salary, department);
    await expect(page.getByText(firstNameTest)).toBeVisible();
    await expect(page.getByText(lastNameTest)).toBeVisible();
    await expect(page.getByText(email)).toBeVisible();
    await expect(page.getByText(age)).toBeVisible();
    await expect(page.getByText(salary)).toBeVisible();
    await expect(page.getByText(department)).toBeVisible();
});

test.only('search new record by name', async ({ page }) => {
    await WebTablesPage.searchRecord(page, firstNameTest); 
    await expect(page.getByText(firstNameTest)).toBeVisible();
});

test.only('clear searchbox', async ({ page }) => {
    await WebTablesPage.clearInput(page);
    await expect(WebTablesPage.searchBox).toBeEmpty();
});