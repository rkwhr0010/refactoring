const rawReading = acquireReading(); 
const aReading = enrichReading(rawReading);

function enrichReading(original){
    const result = _.cloneDeep(original);
    //미가공 측정값에 기본 소비량을 부가 정보로 덧붙임
    result.baseCharge =  calculateBaseCharge(aReading);
    return result;
}

//이미 함수로 만든 코드가 발견됐다.
function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}