//호출하는 곳 1
aShipment.deliveryDate = deliveryDate(anOrder, true);
//다른 어딘가 호출하는 곳2
aShipment.deliveryDate = deliveryDate(anOrder, false);

//함수 추출하기로 조건문 분해
function deliveryDate(anOrder, isRush){
    if(isRush) return rushDeliveryDate(anOrder);
    else return regularDeliveryDate(anOrder);
}

function regularDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT", "NY"].includes(anOrder.deliveryState))
        deliveryTime = 2;
    else if (["ME", "NH"].includes(anOrder.deliveryState))
        deliveryTime = 3;
    else
        deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}

function rushDeliveryDate(anOrder) {
    let deliveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState))
        deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState))
        deliveryTime = 2;
    else
        deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}
