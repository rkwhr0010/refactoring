//client2.js  차 세금 일부 면제 코드
const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) *aReading.quantity);
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));