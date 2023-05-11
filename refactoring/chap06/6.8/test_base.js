const station = {
    name: "ZB1",
    readings: [
        {temp:47, time: "2016-11-10 09:10"},
        {temp:53, time: "2016-11-10 09:20"},
        {temp:58, time: "2016-11-10 09:30"},
        {temp:53, time: "2016-11-10 09:40"},
        {temp:51, time: "2016-11-10 09:50"},
    ]
};
//새로운 데이터 구조 매개변수 추가
function readingsOutsideRange(station, min, max, range){
    return station.readings
        .filter(r => r.temp < min || r.temp > max);
}
let alerts = readingsOutsideRange(station, 
     operationPlan.temperatureFloor,
    operationPlan.temperatureCeiling
    ,null);

//묶을 클래스
class NumberRange{
    constructor(min,max){
        this._data = {min:min, max:max};
    }
    get min(){return this._data.min};
    get max(){return this._data.max};
}