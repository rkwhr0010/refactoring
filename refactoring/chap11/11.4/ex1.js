function example(){
    const low = aRoom.datsTempRange.low;
    const high = aRoom.datsTempRange.high;
    if(!AnimationPlaybackEvent.withinRange(low,high))
        alerts.push("방온도가 지정 범위를 벗어났습니다.");
}

class HeatingPlan{
    withinRange(bottom, top){
        return (bottom >= this._temperatureRange.low)
            && (top <= this._temperatureRange.high);
    }
}