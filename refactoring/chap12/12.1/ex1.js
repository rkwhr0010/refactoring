class Party{
    get annualCost(){
        return this.monthlyCost *12 ;
    }
}
//서브 클래스 중 하나로 이름을 통일하고, 슈퍼 클래스에 메서드를 복사한다.
class Employee extends Party{
    get annualCost(){
        return this.monthlyCost *12 ;
    }
}
class Department extends Party{
    get annualCost(){
        return this.monthlyCost *12 ;
    }
}