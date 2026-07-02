export default class PurchasePage {
    constructor(page) {
        this.page = page;
        this.product1 = page.getByRole('link', {name: 'Samsung galaxy s6'});
        this.product2 = page.getByRole('link', {name: 'Nokia lumia 1520'});
        this.product3 = page.getByRole('link', {name: 'Nexus 6'});
        this.product4 = page.getByRole('link', {name: 'MacBook air'})
        this.product5 = page.getByRole('link', {name: 'ASUS Full HD'})
        this.addToCart = page.getByRole('link', {name: 'Add to cart'});
        this.home = page.getByRole('link', {name: 'Home'});
        this.cart = page.locator('#cartur');
        this.laptop = page.getByRole('link', {name: 'Laptops'})
        this.monitor = page.getByRole('link', {name: 'Monitors'})
    }
    async Purchase() {
        await this.product1.click();
        await this.page.waitForTimeout(2000);
        await this.addToCart.click();
        await this.page.waitForTimeout(2000);
        await this.home.click();
        await this.page.waitForTimeout(2000);
        await this.product2.click();
        await this.page.waitForTimeout(2000);
        await this.addToCart.click();
        await this.page.waitForTimeout(2000);
        await this.cart.click();
    }
    async AllProduct() {
        await this.product3.click();
        await this.addToCart.click();
        await this.home.click();
        await this.laptop.click();
        await this.product4.click();
        await this.addToCart.click();
        await this.home.click();
        await this.monitor.click();
        await this.product5.click();
        await this.page.waitForTimeout(2000);
        await this.addToCart.click();
        await this.cart.click();
        await this.page.waitForTimeout(2000);
    }

        
}