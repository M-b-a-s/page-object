import { BasePage } from "./BasePage";
import { expect, Locator, Page } from "@playwright/test";

export class CheckboxesPage extends BasePage {
    // Declare resuable locators
    protected readonly checkbox1: Locator;
    protected readonly checkbox2: Locator;
    protected readonly form: Locator;

    constructor(page: Page) {
        super(page);
        this.checkbox1 = page.locator('xpath=//form[@id="checkboxes"]/input[1]');
        this.checkbox2 = page.locator('xpath=//form[@id="checkboxes"]/input[2]');
        this.form = page.locator('xpath=//form[@id="checkboxes"]');
    }

    // Navigate to Checkboxes page
    async openCheckboxesPage() {
        await this.goToUrl('/checkboxes');
        await this.basePageExpectVisible(this.form);
    }

    // Check checkbox 1
    async checkCheckbox1() {
        await this.checkbox1.check();
    }

    // Uncheck checkbox 1
    async uncheckCheckbox1() {
        await this.checkbox1.uncheck();
    }

    // Check checkbox 2
    async checkCheckbox2() {
        await this.checkbox2.check();
    }

    // Uncheck checkbox 2
    async uncheckCheckbox2() {
        await this.checkbox2.uncheck();
    }

    /** Validate expected checked / unchecked state */
    async assertCheckboxState(isFirstChecked: boolean, isSecondChecked: boolean) {
        await expect(this.checkbox1).toBeChecked({checked: isFirstChecked});
        await expect(this.checkbox2).toBeChecked({checked: isSecondChecked});
    }
}