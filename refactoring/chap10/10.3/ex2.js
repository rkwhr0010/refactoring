function adjustedCapital(anInstrument){
    let result = 0;
    if(anInstrument.capital <= 0){ return result;}
    //not 조건 제거
    if(anInstrument.interestRate <= 0 || anInstrument.duration <= 0){
        return result;
    }
    result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
    return result
}