export default class MonitorPage {
    constructor(page) {
        this.page = page;
        this.product1 = page.getByRole('link', {name: 'Apple monitor 24'});
        this.addToCart = page.getByRole('link', {name: 'Add to cart'});
        this.monitor = page.getByRole('link', { name: 'Monitors' });
        this.cart = page.locator('#cartur');
    }
    async monitor1(){
        await this.monitor.click();
        await this.product1.click();
        await this.page.waitForTimeout(2000);
        await this.addToCart.click();
        await this.page.waitForTimeout(2000);
        await this.cart.click();

    }
}
