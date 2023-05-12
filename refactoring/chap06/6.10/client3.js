/** client3.js 
 * 중복코드가 한 곳에 몰려있으면 함수 추출로 제거하면 된다.
 * 현재 중복 코드가 전체에 흩어져 있다고 가정한다.
 */
const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);
//이미 함수로 만든 코드가 발견됐다.
function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}