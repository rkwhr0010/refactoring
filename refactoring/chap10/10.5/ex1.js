//Site에서 특이 케이스일 때 전용 객채 반환하도록 수정
class Site{
    get customer(){return this._customer === "미확인 고객" 
        ? new UnknownCustomer() 
        : this._customer;}
}
class Customer{
    get name(){return this._name;}//고객이름
    get buillingPlan(){return this._buillingPlan;}//요금제
    set buillingPlan(arg){this._buillingPlan= arg;}
    get paymentHistory(){return this._paymentHistory;}//납부이력
    //미확인 고객구분 메서드
    get isUnknown(){return false;}
}
//미확인 고객 전용 클래스
class UnknownCustomer{
    get isUnknown(){return true;}
    get name(){return "거주자";}
    get buillingPlan(){return registry.buillingPlans.basic;}
    set buillingPlan(arg){/*무시*/}
}
//"미확인 고객" 문자열 확인하는 코드가 사라짐
function isUnknown(arg){
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
        throw new Error(`잘못된 값과 비교 <${arg}>`);
    return arg.isUnknown;
}
function client1(){
    const aCustomer = aCustomer.name;
}
function client2(){//읽는 경우
    const plan = aCustomer.buillingPlan;
}
function client3(){//쓰는 경우
    aCustomer.buillingPlan = newPlan;
}
function client4(){
    const weeksDelinquent = (isUnknown(aCustomer))
        ? 0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}