function disabilityAmount(anEmployee){
    if(isNotEligibleForDisability()) return 0;
    //함수로 추출
    function isNotEligibleForDisability() {
        return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
    }
}