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
//특이 케이스 조건 검사 부분 함수로 추출, 및 사용
function isUnknown(arg){
    return (arg === "미확인 고객");
}

function client1(){
    const aCustomer = site.customer;
    /*코드 들*/
    let customerName;
    if(isUnknown(aCustomer)) customerName = "거주자";
    else customerName = aCustomer.name;
}
function client2(){
    const plan = isUnknown(aCustomer)
        ? CustomElementRegistry.billingPlans.basic
        : aCustomer.billingPlan;
}
function client3(){
    const weeksDelinquent = isUnknown(aCustomer)
        ? 0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
