class Site{
    get customer(){return this._customer;}
}
//이제 조건 검사하는 코드를 클래스로 옮긴다.
class Customer{
    get name(){}
    get billingPlan(){}
    set billingPlan(arg){}
    get paymentHistory(){}
    get isUnknown(){return (this._customer === "미확인 고객")?createUnknownCustomer():this._customer;}
}
function createUnknownCustomer(){
    return {
        isUnknown : true,
    };
}
function isUnknown(arg){
    return arg.isUnknown;
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
