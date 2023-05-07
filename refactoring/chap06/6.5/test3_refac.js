function inNewEngland(aCustomer){
    //변수 인라인하기
    return newFunction(aCustomer.address.state);
}
function newFunction(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
//호출부 변경
const newEnglanders = someCustomers.filter(c=>newFunction(c));

