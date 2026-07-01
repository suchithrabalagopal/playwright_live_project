import {test,expect} from "@playwright/test"; 
import SignupPage from "../pages/signup.js";
import constant from "../constants/constant.js";

test.beforeEach(async({page})=> {
await page.goto(constant.BASE_URL);
});

test('@smoke Signup with valid credentials', async ({page}) => {

  //  await page.goto('https://www.demoblaze.com/');
    await page.locator('#signin2').click();
    const signupPage = new SignupPage(page);
    await signupPage.Signup('testuser', 'testpassword');
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://demoblaze.com/');

})

test('Signup and close the dialog', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await page.locator('#signin2').click();
    await page.waitForTimeout(2000);
    await page.locator('//button[@class="btn btn-secondary"]').nth(1).click();

})