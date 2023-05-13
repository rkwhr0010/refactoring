//중간 데이터 구조에 데이터를 넣고 인자를 하나씩 줄여간다.
function priceOrder(product, quantity, shippingMethod){
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = {basePrice:basePrice};
    const price = applyShipping(priceData, basePrice, shippingMethod, quantity, discount);
    return price;
}
function applyShipping(priceData, shippingMethod, quantity, discount) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = quantity * shippingPerCase;
    const price = priceData.basePrice - discount + shippingCost;
    return price;
}