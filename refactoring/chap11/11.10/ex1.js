function charge(customer, usage, provider){
    return new ChargeCalculator(customer, usage, provider).charge;
}
class ChargeCalculator{
    constructor(customer, usage, provider){
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    }
    //보조함수 제거하기, 함수 인라인 하기
    get charge(){
        const baseCharge = this._customer.baseRate * this._usage;
        return baseCharge + this._provider.connectionCharge;
    }
}
//호출자...
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;