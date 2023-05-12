//차 사용량 레코드
reading = {customer: "ivan", quantity:10, month: 5, year:2017};

//client1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

//client2.js  차 세금 일부 면제 코드
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

//client3
const rawReading = acquireReading(); 
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

function enrichReading(original){
    const result = _.cloneDeep(original);
    result.baseCharge =  calculateBaseCharge(result);
    //함수 이동
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
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