function example(){
    const tempRange = aRoom.daysTempRange;
    const isWithinRange = xxNEWwithinRange();
    //함수 추출하기
    function xxNEWwithinRange() {
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = aPlan.withinRange(low, high);
        if (!isWithinRange)
            alerts.push("방 온도가 지정 범위를 벗어났습니다.");
        return isWithinRange;
    }
}