class Site{
    get customer(){return this._customer === "미확인 고객" 
        ? new UnknownCustomer() 
        : this._customer;}
}
class Customer{
    get name(){return this._name;}
    get buillingPlan(){return this._buillingPlan;}
    set buillingPlan(arg){this._buillingPlan= arg;}
    get paymentHistory(){return this._paymentHistory;}
    get isUnknown(){return false;}
}
class UnknownCustomer{
    get isUnknown(){return true;}
    get name(){return "거주자";}
    get buillingPlan(){return registry.buillingPlans.basic;}
    set buillingPlan(arg){/*무시*/}
    get paymentHistory(){return new NullPaymentHistory();}
}
class NullPaymentHistory{
    get weeksDelinquentInLastYear(){return 0;}
}

function isUnknown(arg){
    if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
        throw new Error(`잘못된 값과 비교 <${arg}>`);
    return arg.isUnknown;
}
function client1(){
    const aCustomer = aCustomer.name;
}
function client2(){
    const plan = aCustomer.buillingPlan;
}
function client3(){
    aCustomer.buillingPlan = newPlan;
}
function client4(){
    const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}