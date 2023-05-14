if(summer()){
    charge = quantity * plan.summerRate;
}else{
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
//추출
function summer() {
    return !aDate.isBefore(plan.summerStrat) && !aDate.isAfter(plan.summerEnd);
}

