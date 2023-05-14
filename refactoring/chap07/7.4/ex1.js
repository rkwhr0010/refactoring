class Order {
    constructor(quantity, item){
        this._quantity = quantity;
        this._item = item;
    }
    get price(){
        var discountFactor = 0.98;
        //변수 인라인
        if(this.basePrice>1000) discountFactor -= 0.03;
        else this.basePrice * discountFactor;
    }
    get basePrice() {
        return this._quantity * this._item.price;
    }
}