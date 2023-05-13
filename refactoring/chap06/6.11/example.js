function priceOrder(product, quantity, shippingMethod){
    const priceData = calculatePricingData(product, quantity);
    const price = applyShipping(priceData, shippingMethod);
    return price;
}
//첫 번째 단계 처리 함수
function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
    const priceData = { basePrice: basePrice, quantity: quantity, discount: discount };
    return priceData;
}
//두 번째 단계 처리 함수
function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}