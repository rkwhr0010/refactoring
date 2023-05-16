class Site{
    get customer(){return this._customer;}
}
class Customer{
    get name(){}
    get billingPlan(){}
    set billingPlan(arg){}
    get paymentHistory(){}
    get isUnknown(){return (this._customer === "미확인 고객")?createUnknownCustomer():this._customer;}
}
//표준 응답을 리터럴 값으로 대체
function createUnknownCustomer(){
    return {
        isUnknown : true,
        name: "거주자",
        billingPlan : registry.billingPlans.basic,
    };
}
function isUnknown(arg){
    return arg.isUnknown;
}

function client1(){
    let customerName = aCustomer.name;
}
function client2(){
    const plan = aCustomer.billingPlan;
}
function client3(){
    const weeksDelinquent = isUnknown(aCustomer)
        ? 0
        : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
