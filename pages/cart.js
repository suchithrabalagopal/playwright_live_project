export default class CartPage {
    constructor(page) {
        this.page = page;
        this.placeOrderButton = page.getByRole('button', {name: 'Place Order'});
        this.name = page.getByRole('textbox', {name: 'Name:'});
        this.country = page.getByRole('textbox', {name: 'Country:'});
        this.city = page.getByRole('textbox', {name: 'City:'});
        this.creditCard = page.getByRole('textbox', {name: 'Credit card:'});
        this.month = page.getByRole('textbox', {name: 'Month:'});
        this.year = page.getByRole('textbox', {name: 'Year:'});
        this.purchaseButton = page.getByRole('button', {name: 'Purchase'});
        this.confirmButton = page.locator('//button[@class="confirm btn btn-lg btn-primary"]')
    }
    async PlaceOrder(name, country, city, creditCard, month, year) {
        
        await this.placeOrderButton.click();
        await this.page.waitForTimeout(2000);
        await this.name.fill(name);
        await this.country.fill(country);
        await this.city.fill(city);
        await this.creditCard.fill(creditCard);
        await this.month.fill(month);
        await this.year.fill(year);
        await this.purchaseButton.click();
        await this.page.waitForTimeout(2000);
        await this.confirmButton.click();
        
    }

}