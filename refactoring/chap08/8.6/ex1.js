//사이드 이펙트가 없는 코드끼리는 마음대로 재배치 할 수 있다.
//부수효과가 없는 프로그래밍을 하는 이유
const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder(); // 바로 근처로 옮김
const units = order.units;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - princingPlan * discountThreshold, 0);
let discount; //바로 근처로 옮김
discount = discountableUnits * pricingPlan.discountFactor;
if(order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);