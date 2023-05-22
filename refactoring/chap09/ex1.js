function distanceTravelled(scenario, time){
    let result;
    //불변으로 정의
    const primaryAcceleration = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAcceleration * primaryTime * primaryTime; 
    let secondaryTime = time - scenario.delay;
    if(secondaryTime > 0){
        let primaryVelocity = primaryAcceleration * scenario.delay;
        //별도 변수
        let acc = (scenario.primaryForce + scenario.secondaryForce) /scenario.mass;
        result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime *secondaryTime;
    }
    return result;
}