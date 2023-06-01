function charge(customer, usage, provider){
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
}
//호출자...
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;