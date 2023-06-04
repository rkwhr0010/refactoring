class Party{
    get annualCost(){
        return this.monthlyCost *12 ;
    }
}
//정상동작을 확인했다면 서브클래스 메서드를 제거한다.
class Employee extends Party{
}
class Department extends Party{
}