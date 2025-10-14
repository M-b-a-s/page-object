import { BasePage } from '../pages/BasePage';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
    async openLoginPage() {
        await this.goToUrl('/login');
    }

    async userLogin(username: string, password: string) {
        await this.basePageFill('#username', username);
        await this.basePageFill('#password', password);
        await this.basePageClick('xpath=//button[@type="submit"]');
    }

    // Assert failed login message
    async assertLoginFailed() {
        await this.basePageExpectVisible('xpath=//div[@id="flash"]');
    }

    async assertFailedUsername() {
        await this.basePageExpectVisible('xpath=//div[@id="flash" and contains(text(), "Your username is invalid!")]');
    }

    async assertFailedPassword() {
        await this.basePageExpectVisible('xpath=//div[@id="flash" and contains(text(), "Your password is invalid!")]');
    }
}