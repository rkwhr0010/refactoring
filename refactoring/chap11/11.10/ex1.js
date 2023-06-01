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
    //보조함수 제거하기,먼저 로컬 변수로 추출
    get charge(){
        const baseCharge = this.baseCharge;
        return baseCharge + this._provider.connectionCharge;
    }
}
//호출자...
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;