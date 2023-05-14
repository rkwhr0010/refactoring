//조건문을 함수로 정리하니 이렇게 추가로 정리할 기회를 얻었다.
charge = summer() ? summerCharge() : regularCharge();
function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
}

function summerCharge() {
    return quantity * plan.summerRate;
}
function summer() {
    return !aDate.isBefore(plan.summerStrat) && !aDate.isAfter(plan.summerEnd);
}

