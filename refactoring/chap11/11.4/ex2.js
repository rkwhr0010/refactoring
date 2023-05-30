function example(){
    const tempRange = aRoom.daysTempRange;
    const isWithinRange = aPlan.xxNEWwithinRange();
    if (!isWithinRange)
            alerts.push("방 온도가 지정 범위를 벗어났습니다.");
}
class HeatingPlan{
    //함수 옮기기
    xxNEWwithinRange() {
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = aPlan.withinRange(low, high);
        return isWithinRange;
    }
}