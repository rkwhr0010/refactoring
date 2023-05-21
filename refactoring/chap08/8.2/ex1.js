class Customer{
    constructor(name, discountRate){
        this._name = name;
        this._setDiscountRate(discountRate);
        this._contract = new CustomerContract(dateToday());
    }
    get discountRate(){return this._discountRate;}
    //먼저 변수 캡슐화부터
    _setDiscountRate(aNumber){this._discountRate = aNumber;}

    becomePreferred(){
        this._setDiscountRate(this._discountRate +0.03);
        //코드들 ...
    }
    applyDiscount(amount){
        return amount.subtract(amount.multiply(this._discountRate));
    }
}
//필드와 접근자 추가
class CustomerContract{
    constructor(startDate,discountRate){
        this._startDate = startDate;
        this._discountRate = discountRate;
    }
    get discountRate(){return this._discountRate;}
    set discountRate(arg){this._discountRate = arg;}
}