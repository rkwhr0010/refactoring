//고객 정보를 갱신하는 클라이언트가 없음
class Site{
    get customer(){return this._customer;}
}
// isUnknown 게터 정의 및 리터럴 객체 생성
class Customer{
    get name(){}
    get billingPlan(){}
    set billingPlan(arg){}
    get paymentHistory(){}
    get isUnknown(){return false;}
}
function createUnknownCustomer(){
    return {
        isUnknown : true,
    };
}
function client1(){
    const aCustomer = site.customer;
    /*코드 들*/
    let customerName;
    if(aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
}
function client2(){
    const plan = (aCustomer === "미확인 고객")
        ? CustomElementRegistry.billingPlans.basic
        : aCustomer.billingPlan;
}
function client3(){
    const weeksDelinquent = (aCustomer === "미확인 고객")
        ? 0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
