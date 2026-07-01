import {test, expect} from '@playwright/test';
import constant from "../constants/constant.js";
import LoginPage from '../pages/login.js';
import credentials from '../utils/credentials.json';
import paramCred from '../utils/paramCred.json';

test.beforeEach(async({page})=> {
await page.goto(constant.BASE_URL);
});

test('@smoke Login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
   // await page.goto('https://www.demoblaze.com/');
    await page.on('dialog',async dialog => await dialog.accept()); 
    await page.waitForTimeout(2000);
    await loginPage.login(credentials.username, credentials.password);
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://demoblaze.com/');
    await loginPage.logout();
})

for(const data of paramCred){
test (`@smoke Login with invalid credentials - ${data.username} and ${data.password}`, async ({page}) => {

    const loginPage = new LoginPage(page);
   // await page.goto('https://www.demoblaze.com/');
    await page.on('dialog',async dialog => await dialog.accept());
    await page.waitForTimeout(2000);
    await loginPage.login(data.username, data.password);
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://demoblaze.com/');


});

}