export default class SignupPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#sign-username');
        this.password = page.locator('#sign-password');
        this.loginButton = page.locator('//button[@class="btn btn-primary"]').nth(1);
    }
    async Signup(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
        
}