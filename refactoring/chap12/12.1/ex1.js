class Party{
    get annualCost(){
        return this.monthlyCost *12 ;
    }
    //Party 슈퍼클래스에서는 서브 클래스에 monthlyCost가 없다.
    //이대로 동작하는 이유는 자바스크립트는 동적언어이기 때문이다.
    //이를 알리기 위해 함정 메서드를 만들어두는 것이 도움된다.
    get monthlyCost(){
        throw new Error("이 값은 서브클래스에서 구현해야합니다.");
    }
}
//정상동작을 확인했다면 서브클래스 메서드를 제거한다.
class Employee extends Party{
    //monthlyCost 있다고 가정
}
class Department extends Party{
    //monthlyCost 있다고 가정
}