import { test, expect } from '../fixtures/pom.fixture';


test.describe('Login Flow', () => {
    test('Successful login with valid credentials', async ({ pm, validUser }) => {
        await pm.loginPage.userLogin(validUser.username, validUser.password);
        await pm.securePage.assertSecurePage();
    });

    test('Failed Login with invalid username', async ({ pm, validUser }) => {
        await pm.loginPage.userLogin('invalidUser', validUser.password);
        await pm.loginPage.assertFailedUsername();
    });

    test('Failed Login with invalid password', async ({ pm, validUser }) => {
        await pm.loginPage.userLogin(validUser.username, 'WrongPassword!');
        await pm.loginPage.assertFailedPassword();
    });
});