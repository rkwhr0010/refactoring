function localShippingRules(country){//country 는 항상 유효함을 가정
    const data = countryData.shippingRules[country];
    if(data) return new shippingRules(data);
    else return -23; //오류
}

function calculateShippingCosts(anOrder){
    //코드들...
    const shippingRules = localShippingRules(anOrder.country);
    if(shippingRules < 0) return shippingRules; //오류 전파
    //코드들...
}
//최상위
let status; //스코프 문제로 선언과 초기화를 어쩔 수 없이 분리
try {
    status = calculateShippingCosts(orderData);
} catch (error) {/*예외처리*/}
if(status < 0) errorList.push({order:orderData, errorCode:statuts});