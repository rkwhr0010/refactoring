function charge(customer, usage, provider){
    return new ChargeCalculator(customer, usage, provider).charge;
}
class ChargeCalculator{
    constructor(customer, usage, provider){
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    } 
    //함수로 변경하기 위에 함수 포맷에 맞게 함수 선언 바꾸기 적용
    charge(customer, usage, provider){
        const baseCharge = this._customer.baseRate * this._usage;
        return baseCharge + this._provider.connectionCharge;
    }
}
//호출자...
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;