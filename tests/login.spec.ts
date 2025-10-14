import { test, expect } from '@playwright/test';
import ManagePage from '../pages/ManagePage';

test.describe('Login Flow', () => {
    let mp: ManagePage;
    test.beforeEach(async ({ page }) => {
        mp = new ManagePage(page);
        await mp.loginPage.openLoginPage();
    });

    test('Successful login with valid credentials', async () => {
        await mp.loginPage.userLogin('tomsmith', 'SuperSecretPassword!');
        await mp.securePage.assertSecurePage();
    });

    test('Failed Login with invalid username', async () => {
        await mp.loginPage.userLogin('invalidUser', 'SuperSecretPassword!');
        await mp.loginPage.assertFailedUsername();
    });

    test('Failed Login with invalid password', async () => {
        await mp.loginPage.userLogin('tomsmith', 'WrongPassword!');
        await mp.loginPage.assertFailedPassword();
    });
});