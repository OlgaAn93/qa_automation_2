import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

class FormPage extends BasePage {
    static firstName: Locator;
    static lastName: Locator;
    static userEmail: Locator;
    static userNumber: Locator;
    static genderMaleRadio: Locator;
    static genderFemaleRadio: Locator;
    static genderOtherRadio: Locator;
    static dateOfBirthInput: Locator;
    static subjectsContainer: Locator;
    static hobbySport: Locator;
    static hobbyReading: Locator;
    static hobbyMusic: Locator;
    static uploadPicture: Locator;
    static currentAddress: Locator;
    static state: Locator;
    static city: Locator;
    static submit: Locator;
    static datePickerMonth: Locator; 
    static datePickerYear: Locator;


    constructor(page: Page) {
        super();
        FormPage.firstName = page.locator('[id="firstName"]');
        FormPage.lastName = page.locator('[id="lastName"]');
        FormPage.userEmail = page.locator('[id="userEmail"]');
        FormPage.genderMaleRadio = page.locator('[id="gender-radio-1"]');
        FormPage.genderFemaleRadio = page.locator('[id="gender-radio-2"]');
        FormPage.genderOtherRadio = page.locator('[id="gender-radio-3"]');
        FormPage.userNumber = page.locator('[id="userNumber"]');
        FormPage.dateOfBirthInput = page.locator('[id="dateOfBirthInput"]');
        FormPage.subjectsContainer = page.locator('[id="subjectsContainer"]');
        FormPage.hobbySport = page.locator('[id="hobbies-checkbox-1"]');
        FormPage.hobbyReading = page.locator('[id="hobbies-checkbox-2"]');
        FormPage.hobbyMusic = page.locator('[id="hobbies-checkbox-3"]');
        FormPage.uploadPicture = page.locator('[id="uploadPicture"]');
        FormPage.currentAddress = page.locator('[id="currentAddress"]');
        FormPage.state = page.locator('[id="state"]');
        FormPage.city = page.locator('[id="city"]');
        FormPage.submit = page.locator('[id="submit"]');
        FormPage.datePickerMonth = page.locator('[class="react-datepicker__month-select"]'); 
        FormPage.datePickerYear = page.locator('[class="react-datepicker__year-select"]'); 
    }
    static async fillForm(page: Page, firstNameTest: string, lastNameTest: string, email: string, mobNumber: string, address: string) {
        await FormPage.firstName.click({ force: true });
        await FormPage.firstName.fill(firstNameTest);
        await FormPage.lastName.click({ force: true });
        await FormPage.lastName.fill(lastNameTest);
        await FormPage.userEmail.click({ force: true });
        await FormPage.userEmail.fill(email);
        await FormPage.genderFemaleRadio.click({ force: true });
        await FormPage.userNumber.click({ force: true });
        await FormPage.userNumber.fill(mobNumber);
        await FormPage.dateOfBirthInput.click({ force: true });
        await FormPage.datePickerMonth.click({ force: true });
        await FormPage.datePickerMonth[0].click({ force: true });
        await FormPage.datePickerYear[100].click({ force: true });
        await FormPage.subjectsContainer.click({ force: true });
        await FormPage.subjectsContainer.fill('Bio');
        await page.getByText('Biology').click({ force: true });
        await FormPage.hobbyMusic.click({ force: true });
        await FormPage.currentAddress.click({ force: true });
        await FormPage.currentAddress.fill(address);
        await FormPage.submit.click({ force: true });
    }
    }
    export default FormPage;