//클래스를 생성하고 호출하는 함수 만들기
function charge(customer, usage, provider){
    return new ChargeCalculator(customer, usage, provider).charge;
}
class ChargeCalculator{
    constructor(customer, usage, provider){
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    }
    get baseCharge(){
        return this._customer.baseRate * this._usage;
    }
    get charge(){
        return this.baseCharge + this._provider.connectionCharge;
    }
}
//호출자...
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;