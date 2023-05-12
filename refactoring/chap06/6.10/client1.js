//client1.js  기본 요금 계산 코드
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) *aReading.quantity;