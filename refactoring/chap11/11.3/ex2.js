//도대체 이 불리언 플래그가 무슨 의미인지 알 수 있나?
//호출하는 곳 1
aShipment.deliveryDate = deliveryDate(anOrder, true);
//다른 어딘가 호출하는 곳2
aShipment.deliveryDate = deliveryDate(anOrder, false);


function deliveryDate(anOrder, isRush){
    if(isRush){
        let deliveryTime;
        if(["MA","CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
        else if(["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
        else deliveryTime = 3;
        return anOrder.placedOn.plusDays(1 + deliveryTime);
    }else{
        let deliveryTime;
        if(["MA","CT","NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
        else if(["ME","NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
        else deliveryTime = 4;
        return anOrder.placedOn.plusDays(2 + deliveryTime);
    }
}