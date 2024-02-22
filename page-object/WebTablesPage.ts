import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

class WebTablesPage extends BasePage {
    static addNewRecordButton: Locator;
    static firstName: Locator;
    static lastName: Locator;
    static userEmail: Locator;
    static age: Locator;
    static salary: Locator;
    static department: Locator;
    static submit: Locator;
    static searchBox: Locator;

    constructor(page: Page) {
        super();
        WebTablesPage.addNewRecordButton = page.locator('[id="addNewRecordButton"]');
        WebTablesPage.firstName = page.locator('[id="firstName"]');
        WebTablesPage.lastName = page.locator('[id="lastName"]');
        WebTablesPage.userEmail = page.locator('[id="userEmail"]');
        WebTablesPage.age = page.locator('[id="age"]');
        WebTablesPage.salary = page.locator('[id="salary"]');
        WebTablesPage.department = page.locator('[id="department"]');
        WebTablesPage.submit = page.locator('[id="submit"]');
        WebTablesPage.searchBox = page.locator('[id="searchBox"]');
    }

    static async addNewRecord(page: Page, firstNameTest: string, lastNameTest: string, email: string, age: string, salary: string, department: string) {
        await WebTablesPage.addNewRecordButton.click({ force: true });
        await WebTablesPage.firstName.click({ force: true });
        await WebTablesPage.firstName.fill(firstNameTest);
        await WebTablesPage.lastName.click({ force: true });
        await WebTablesPage.lastName.fill(lastNameTest);
        await WebTablesPage.userEmail.click({ force: true });
        await WebTablesPage.userEmail.fill(email);
        await WebTablesPage.age.click({ force: true });
        await WebTablesPage.age.fill(age);
        await WebTablesPage.salary.click({ force: true });
        await WebTablesPage.salary.fill(salary);
        await WebTablesPage.department.click({ force: true });
        await WebTablesPage.department.fill(department);
        await WebTablesPage.submit.click({ force: true });
    }

    static async searchRecord(page: Page, firstNameTest: string) {
        await WebTablesPage.searchBox.click({ force: true });
        await WebTablesPage.lastName.fill(firstNameTest);
    }

    static async clearInput(page: Page ){
        await WebTablesPage.searchBox.click({ force: true });
        await WebTablesPage.searchBox.clear();
    }
}
export default WebTablesPage; 