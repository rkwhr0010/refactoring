//측정값
let reading={customer : "ivan", quantity:10, month:5, uear:2017};
//클라이언트1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseRate;
//클라이언트2
const aReading2 = acquireReading();
const baseCharge2 = baseRate(aReading2.month, aReading2.year) * aReading2.quantity;
const taxableCharge2 = Math.max(0,base-taxTreshold(aReading2.year));
//클라이언트3
const rawReading3 = acquireReading();
const aReading3 = new Reading(rawReading3);
const basicChargeAmount = aReading3.baseCharge;

class Reading{
    constructor(data){
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }
    get customer(){return this._customer;}
    get quantity(){return this._quantity;}
    get month(){return this._month;}
    get year(){return this._year;}
    //알맞은 이름 짓기
    get baseCharge(){
        return baseRate(this.month, this.year);
    }
}
