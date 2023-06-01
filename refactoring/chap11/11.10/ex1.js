function charge(customer, usage, provider){
    return new ChargeCalculator()
        .charge(customer, usage, provider);
}
class ChargeCalculator{
    //나머지도 하나씩 적용하면서 테스트 
    charge(customer, usage, provider){
        const baseCharge = customer.baseRate * usage;
        return baseCharge + provider.connectionCharge;
    }
}
//호출자...
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;