import { test, expect } from '../fixtures/pom.fixture';

test.describe('Checkboxes', () => {
    test('Checkboxes - Check and Uncheck', async ({ pm }) => {
        await pm.checkboxesPage.checkCheckbox1();
        await pm.checkboxesPage.uncheckCheckbox2();
        await pm.checkboxesPage.assertCheckboxState(true, false);});

    test('Checkboxes - Uncheck and Check', async ({ pm }) => {
        await pm.checkboxesPage.uncheckCheckbox1();
        await pm.checkboxesPage.checkCheckbox2();
        await pm.checkboxesPage.assertCheckboxState(false, true);
    });
});