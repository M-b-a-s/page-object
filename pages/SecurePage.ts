import { BasePage } from "./BasePage";

export class SecurePage extends BasePage {
    async assertSecurePage() {
        await this.basePageExpectVisible('xpath=//div[@id="flash" and contains(text(), "You logged into a secure area!")]');
    }

    // logout
    async userLogout() {
        await this.basePageClick(this.page.getByRole('link', { name: 'Logout' }));
        await this.page.waitForURL('**/login');
    }
}
