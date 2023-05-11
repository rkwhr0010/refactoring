//측정값
let reading={customer : "ivan", quantity:10, month:5, uear:2017};
//클라이언트1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseRate;
//클라이언트2
const rawReading2 = acquireReading();
const aReading2 = new Reading(rawReading);
const taxableCharge2 = taxableChargeFn() ;
//함수로 추출
function taxableChargeFn() {
    return Math.max(0, aReading2.baseRate - taxTreshold(aReading2.year));
}

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

