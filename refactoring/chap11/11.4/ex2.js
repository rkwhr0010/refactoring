function example(){
    const low = aRoom.daysTempRange.low;
    const hihg = aRoom.daysTempRange.high;
    if(!aPlan.withinRange(low,high))
        alerts.push("방 온도가 지정 범위를 벗어났습니다.");
}