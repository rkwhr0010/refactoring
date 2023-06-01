function charge(customer, usage, provider){
    return new ChargeCalculator(usage, provider)
        .charge(customer, usage, provider);
}
class ChargeCalculator{
    constructor(usage, provider){
        this._usage = usage;
        this._provider = provider;
    } 
    //인스턴스 변수를 하나씩 점진적으로 제거하면서 매개변수를 사용하도록 수정
    charge(customer, usage, provider){
        const baseCharge = customer.baseRate * this._usage;
        return baseCharge + this._provider.connectionCharge;
    }
}
//호출자...
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;