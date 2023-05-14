//여름철엔 할인율이 달라짐
if(!aDate.isBefore(plan.summerStrat) && !aDate.isAfter(plan.summerEnd)){
    charge = quantity * plan.summerRate;
}else{
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
