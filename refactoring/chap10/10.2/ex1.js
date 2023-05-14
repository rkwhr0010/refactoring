function disabilityAmount(anEmployee){
    //합친 후 항상 테스트
    if(anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime) return 0;
}