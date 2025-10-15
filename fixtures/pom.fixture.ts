// Creating a Playwright fixture that initializes a Page Object Manager (PomManager) for each test.
// This allows us to access the Page Objects(LoginPage, SecurePage, etc), through the manager.
// The fixture also provides a valid user object for authentication tests.

import { test as base } from '@playwright/test';
import PomManager from '../pages/ManagePage';
import validUser from '../test-data/validUser.json';

type MyFixtures = {
    pm: PomManager;
    validUser: { username: string; password: string };
};

export const test = base.extend<MyFixtures>({
    pm: async ({ page }, use) => {
        const pm = new PomManager(page);
        await use(pm);
    },
    validUser: async ({}, use) => {
        await use(validUser);
    }
});

export { expect } from '@playwright/test';