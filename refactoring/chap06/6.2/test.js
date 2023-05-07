function rating(aDriver){
    return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}
//매개변수 이름이 다른 경우
function moreThanFiveLateDeliveries(dvr){
    return dvr.numberOfLateDeliveres > 5;
}