//측정값
let reading={customer : "ivan", quantity:10, month:5, uear:2017};
//클라이언트1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
//클라이언트2
const aReading2 = acquireReading();
const baseCharge2 = baseRate(aReading2.month, aReading2.year) * aReading2.quantity;
const taxableCharge2 = Math.max(0,base-taxTreshold(aReading2.year));
//클라이언트3
const aReading3 = acquireReading();
const basicChargeAmount3 = calculateBaseCharge(aReading3);
function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year);
}