//지나치게 까다로워 고치려면 일이 커질 것 같으면 래핑하는 함수도 고려할만 하다.
function rushDeliveryDate(anOrder) {return deliveryDateHelperOnly(anOrder, true);}
function regularDeliveryDate(anOrder) {return deliveryDateHelperOnly(anOrder, false);}

function deliveryDateHelperOnly(anOrder, isRush){
    let result;
    let deliveryTime;
    
    if(["MA","CT"].includes(anOrder.deliveryState))
        deliveryTime = isRush ? 1 : 2;
    else if ( ["NY","NH"].includes(anOrder.deliveryState)){
        deliveryTime = 2;
        if(anOrder.deliveryState === "NH" && !isRush)
            deliveryTime = 3;
    }
    else if (isRush || anOrder.deliveryState === "ME")
        deliveryTime = 3;
    else 
        deliveryTime = 4;

    result = anOrder.placeOn.plusDays(2 + deliveryTime);
    if(isRush) result = result.minusDays(1);
    return result;
}