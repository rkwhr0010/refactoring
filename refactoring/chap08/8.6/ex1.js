const pricingPlan = retrievePricingPlan();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
const units = order.units;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - princingPlan * discountThreshold, 0);
let discount; 
discount = discountableUnits * pricingPlan.discountFactor;
if(order.isRepeat) discount += 20; //이 줄은 맨끝으로 슬라이드하고 싶어도 참조하는 라인이 있어 막힌다.
charge = charge - discount;
chargeOrder(charge);