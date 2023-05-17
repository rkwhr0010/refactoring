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
    const site = acquireSiteData();
    const aCustomer = site.customer;
    //여러 코드...
    let customerName;
    if(aCustomer === "미확인 고객") customerName = "거주자";
    else customerName = aCustomer.name;
}
function client2(){
    const plan = (aCustomer === "미확인 고객")
        ? registry.billingPlans.basic
        : aCustomer.billingPlan;
}
function client3(){
    const weeksDelinquent = (aCustomer === "미확인 고객")
        ? 0 
        : aCustomer.paymentHistory.weeksDeliquentInLastYear;
}


