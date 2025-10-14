import { test, expect } from '@playwright/test';
import ManagePage from '../pages/ManagePage';

test.describe('Checkboxes', () => {
    let mp: ManagePage;
    test.beforeEach(async ({ page }) => {
        mp = new ManagePage(page);
        await mp.checkboxesPage.openCheckboxesPage();
    });

    test('Checkboxes - Check and Uncheck', async () => {
        await mp.checkboxesPage.checkCheckbox1();
        await mp.checkboxesPage.uncheckCheckbox2();
        await mp.checkboxesPage.assertCheckboxState(true, false);});
});