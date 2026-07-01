import {test, expect} from '@playwright/test';
import LoginPage from '../pages/login.js';
import PurchasePage from '../pages/purchase.js';
import credentials from '../utils/credentials.json';
import CartPage from '../pages/cart.js';
import MonitorPage from '../pages/monitor.js';
import LaptopPage from '../pages/laptop.js';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
});

test('Purchase a product', async ({page}) => {
    const loginPage = new LoginPage(page);
    const purchasePage = new PurchasePage(page);
    const cartPage = new CartPage(page);
   // await page.goto('https://www.demoblaze.com/');
    await page.on('dialog',async dialog => await dialog.accept()); 
    await page.waitForTimeout(2000);
    await loginPage.login(credentials.username, credentials.password);
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await purchasePage.Purchase();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
    await page.waitForTimeout(2000);
    await cartPage.PlaceOrder('Suchithra', 'India', 'Chennai', '1234567890', '12/24', '123');
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
})


test('Purchase a product from category Monitors', async ({page}) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const monitorPage = new MonitorPage(page);
  // await page.goto('https://www.demoblaze.com/');
    await page.on('dialog',async dialog => await dialog.accept()); 
    await page.waitForTimeout(2000);
    await loginPage.login(credentials.username, credentials.password);
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.waitForTimeout(2000);
    await monitorPage.monitor1();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
    await page.waitForTimeout(2000);
    await cartPage.PlaceOrder('Suchithra', 'India', 'Chennai', '1234567890', '12/24', '123');
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
})

test('Purchase a product from category Laptops', async ({page}) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const laptopPage = new LaptopPage(page);
   // await page.goto('https://www.demoblaze.com/');
    await page.on('dialog',async dialog => await dialog.accept());
    await page.waitForTimeout(2000);
    await loginPage.login(credentials.username, credentials.password);
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.waitForTimeout(2000);
    await laptopPage.laptop1();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
    await page.waitForTimeout(2000);
    await cartPage.PlaceOrder('Suchithra', 'India', 'Chennai', '1234567890', '12/24', '123');
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
})

test('Purchase all three products', async ({page}) => {
    const loginPage = new LoginPage(page);
    const purchasePage = new PurchasePage(page);
    const cartPage = new CartPage(page);
   // await page.goto('https://www.demoblaze.com/');
    await page.on('dialog',async dialog => await dialog.accept()); 
    await page.waitForTimeout(2000);
    await loginPage.login(credentials.username, credentials.password);
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await purchasePage.AllProduct();
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
    await page.waitForTimeout(2000);
    await cartPage.PlaceOrder('Suchithra', 'India', 'Chennai', '1234567890', '12/24', '123');
    await page.waitForTimeout(2000);    
    await loginPage.logout();
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

})