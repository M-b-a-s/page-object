// Manage page acts as a central hub for all page objects in the application.
// It uses lazy getters to create each page object only when needed.
// This saves reesources in large tests suites, as unused pages are not built.
// For small projects, you could create all page objects up front instead.

import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { SecurePage } from './SecurePage';
import { CheckboxesPage } from './CheckboxesPage';
import { HorizontalSliderPage } from './HorizontalSliderPage';
import { get } from 'http';

export default class ManagePage {
    constructor(private readonly page: Page) {}

    // private caches (undefined until first access)
    private _loginPage?: LoginPage;
    private _securePage?: SecurePage;
    private _checkboxesPage?: CheckboxesPage;
    private _horizontalSliderPage?: HorizontalSliderPage;

    // Lazy getters: create the page object only on the first use, then reuses it
    get loginPage(): LoginPage {
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }

    // same lazy getter code but in one line
    get securePage(): SecurePage {
        return this._securePage ??= new SecurePage(this.page);
    }
    get checkboxesPage(): CheckboxesPage {
        return this._checkboxesPage ??= new CheckboxesPage(this.page);
    }

    get horizontalSliderPage(): HorizontalSliderPage {
        return this._horizontalSliderPage ??= new HorizontalSliderPage(this.page);
    }

}