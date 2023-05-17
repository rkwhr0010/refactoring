const record = {
    name : "애크미 보스턴",
    location : "Malden MA",
    //여러 정보들...
    customer : {
        name: "애크미 산업",
        billingPlan:"plan-451",
        paymentHistory:{
            weeksDeliquentInLastYear: 7,
            //여러 정보들...
        },
        /*....... */
    }
}

const record2 ={
    name : "물류창고 15",
    location : "Malden MA",
    //여러 정보들...
    customer:"미확인 고객",
}
//클라이언트1
function client1(){
    const rawSite = acquireSiteData();
    const site = enrichSite(rawSite);
    const aCustomer = site.customer;
    //여러 코드...
    const customerName = aCustomer.name;
}
function enrichSite(inputSite){
    const result = _.cloneDeep(inputSite);
    const unknownCustomer = {
        isUnknown: true,
        name: "거주자", //이름 옮기기
    };
    if(isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown =false;
    return result;
}
//변환함수 고려한 수정
function isUnknown(aCustomer){
    if (aCustomer === "미확인 고객") return true;
    else return aCustomer.isUnknown;
}

function client2(){
    const plan = isUnknown(aCustomer)
        ? registry.billingPlans.basic
        : aCustomer.billingPlan;
}
function client3(){
    const weeksDelinquent = isUnknown(aCustomer)
        ? 0 
        : aCustomer.paymentHistory.weeksDeliquentInLastYear;
}