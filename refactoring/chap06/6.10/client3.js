const rawReading = acquireReading(); 
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

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
//enrichReading() 함수가 정보추가 시 원본 함수를 훼손하는지 체크
it('check reading unchanged', function(){
    const baseReading = reading = {customer: "ivan", quantity:10, month: 5, year:2017};
    const oracle = _.cloneDeep(baseReading);
    enrichReading(baseReading);
    assert.deepEquals(baseReading, oracle);
})