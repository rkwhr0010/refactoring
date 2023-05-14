class Order {
    constructor(quantity, item){
        this._quantity = quantity;
        this._item = item;
    }
    get price(){
        const basePrice = this.basePrice();
        var discountFactor = 0.98;
        if(basePrice>1000) discountFactor -= 0.03;
        else basePrice * discountFactor;

    }
    //게터로 추출
    get basePrice() {
        return this._quantity * this._item.price;
    }
}