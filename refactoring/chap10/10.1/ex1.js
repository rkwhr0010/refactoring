//나머지도 정리
if(summer()){
    charge = summerCharge();
}else{
    charge = regularCharge();
}
function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}

function summerCharge() {
    return quantity * plan.summerRate;
}
function summer() {
    return !aDate.isBefore(plan.summerStrat) && !aDate.isAfter(plan.summerEnd);
}

