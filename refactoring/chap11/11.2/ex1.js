//가장 간단한 예시
function tenPercentRaise(aPerson){
    aPerson.salary = aPerson.salary.multiply(1.1);
}
function fivePercentRaise(aPerson){
    aPerson.salary = aPerson.salary.multiply(1.05);
}
//함수 매개변수화
function rise(aPerson, factor){
    aPerson.salary = aPerson.salary.multiply(1+factor);
}