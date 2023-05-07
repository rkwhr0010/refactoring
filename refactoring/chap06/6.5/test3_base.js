/* 현재 문제는 매개변수를 객체로 받고 있다. 재사용성이 제한된다.*/
function inNewEngland(aCustomer){
    return ["MA","CT","ME","VT","NH","RI"].includes(aCustomer.address.state);
}
//호출부
const newEnglanders = someCustomers.filter(c=>inNewEngland(c));