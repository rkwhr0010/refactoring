function example(){
    //기존 함수 호출하는 곳 새 함수 호출로 변경
    if(!aPlan.xxNEWwithinRange(aRoom.datsTempRange))
        alerts.push("방온도가 지정 범위를 벗어났습니다.");
}

class HeatingPlan{
    withinRange(bottom, top){
        return (bottom >= this._temperatureRange.low)
            && (top <= this._temperatureRange.high);
    }
    xxNEWwithinRange(aNumberRange){
        return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
}