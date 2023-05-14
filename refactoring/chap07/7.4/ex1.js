class Order {
    constructor(quantity, item){
        this._quantity = quantity;
        this._item = item;
    }
    get price(){
        const discountFactor = 0.98;
        if(this.basePrice>1000) discountFactor -= 0.03;
        else this.basePrice * discountFactor;
    }
    get basePrice() {
        return this._quantity * this._item.price;
    }
}