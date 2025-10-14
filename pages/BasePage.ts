import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
    // BasePage is an abstract class, so it cannot be instantiated directly.
    // It serves as a base for other page classes to inherit common functionality.
    constructor(protected readonly page: Page) {}

    /* ======= Navigation ======= */
    // Navigate to a specific URL path
    protected async goToUrl(path: string) {
        await this.page.goto(path);
    }

    /* ======= Low-level helpers (protected) ======= */
    // These methods are intended to be used by subclasses of BasePage
    // This method clicks on an element identified by the selector
    protected async basePageClick(selector: string | Locator) {
        await this.toLocator(selector).click();
    }

    // This method fills an input field identified by the selector with the provided value
    protected async basePageFill(selector: string | Locator, value: string) {
        await this.toLocator(selector).fill(value);
    }

    protected async basePageExpectVisible(selector: string | Locator) {
        await expect(this.toLocator(selector)).toBeVisible();
    }


    /* ======= Utilities ======= */
    // This method is used to convert a string selector to a Playwright Locator
    protected toLocator(selector: string | Locator): Locator {
        return typeof selector === 'string' ? this.page.locator(selector) : selector;
    }
}