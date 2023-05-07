function inNewEngland(aCustomer){
    const stateCode = aCustomer.address.state;
    return newFunction(stateCode);
}
//임시 함수 추출
function newFunction(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
//호출부
const newEnglanders = someCustomers.filter(c=>inNewEngland(c));

