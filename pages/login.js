export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginicon = page.locator('#login2');
        this.loginButton = page.locator('//button[@class="btn btn-primary"]').nth(2);
        this.logoutButton = page.locator('#logout2')
    }
    async login(username, password) {
        await this.loginicon.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async logout(){
         await this.logoutButton.click();
    }    
}
