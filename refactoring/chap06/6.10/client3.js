const rawReading = acquireReading(); //미가공 측정값
const aReading = enrichReading(rawReading);
const basicChargeAmount = calculateBaseCharge(aReading);

//먼저 입력 객체를 그대로 복사해 반환하는 함수를 만든다.
function enrichReading(original){
    const result = _.cloneDeep(original);
    return result;
}

//이미 함수로 만든 코드가 발견됐다.
function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}