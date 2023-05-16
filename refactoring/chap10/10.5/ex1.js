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
}
function isUnknown(arg){
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
        throw new Error(`잘못된 값과 비교 <${arg}>`);
    return arg.isUnknown;
}

//클라리언트1이라고 가정
function client1(){
    const aCustomer = site.customer;
    /**코드 들..*/
    let customerName;
    if(isUnknown(aCustomer)) customerName = "거주자";
    else customerName =aCustomer.name;
}
//클라이언트2
function client2(){
    const plan = (isUnknown(aCustomer))
        ? registry.buillingPlans.basic
        : aCustomer.buillingPlan;
    /**코드 들..*/
}
//클라이언트3
function client3(){
    if(!isUnknown(aCustomer)) aCustomer.buillingPlan = newPlan;
    /**코드 들..*/
}
//클라이언트4
function client4(){
    const weeksDelinquent = (isUnknown(aCustomer))
        ? 0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}