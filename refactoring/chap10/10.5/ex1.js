//전력 회사 가정, 현장에 인프라를 설치해 서비스를 제공할 것
class Site{
    get customer(){return this._customer;}
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
//한번에 클래스 사용하도록 하기 부담됨, 임시로 수정할 코드들을 함수로 모아둠
function isUnknown(arg){
    if(!((arg instanceof Customer) || (arg === "미확인 고객")))
        throw new Error(`잘못된 값과 비교 : <${arg}>`);
    return (arg === "미확인 고객");
}

//클라리언트1이라고 가정
function client1(){
    const aCustomer = site.customer;
    /**코드 들..*/
    let customerName;
    if(aCustomer === "미확인 고객") customerName = "거주자";
    else customerName =aCustomer.name;
}
//클라이언트2
function client2(){
    const plan = (aCustomer === "미확인 고객")
        ? registry.buillingPlans.basic
        : aCustomer.buillingPlan;
    /**코드 들..*/
}
//클라이언트3
function client3(){
    if(aCustomer !== "미확인 고객") aCustomer.buillingPlan = newPlan;
    /**코드 들..*/
}
//클라이언트4
function client4(){
    const weeksDelinquent = (aCustomer === "미확인 고객")
        ? 0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}