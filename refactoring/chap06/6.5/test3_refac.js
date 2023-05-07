//함수 선언 바꾸기로 새함수이름을 기존함수이름으로 변경
function inNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}
//호출부 변경
const newEnglanders = someCustomers.filter(c=>inNewEngland(c));