export default class LaptopPage {
    constructor(page) {
        this.page = page;
        this.product1 = page.getByRole('link', {name: 'Sony vaio i5'});
        this.addToCart = page.getByRole('link', {name: 'Add to cart'});
        this.laptop = page.getByRole('link', { name: 'Laptops' });
        this.cart = page.locator('#cartur');
    }
    async laptop1(){
        await this.laptop.click();
        await this.product1.click();
        await this.page.waitForTimeout(2000);
        await this.addToCart.click();
        await this.page.waitForTimeout(2000);
        await this.cart.click();
    }
}