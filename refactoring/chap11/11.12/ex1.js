function localShippingRules(country){//country 는 항상 유효함을 가정
    const data = countryData.shippingRules[country];
    if(data) return new shippingRules(data);
    //오류 코드 대신 예외를 던진다.
    else return new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder){
    //코드들...
    const shippingRules = localShippingRules(anOrder.country);
    //이 상태로 두고 아직 오류 코드를 다 못처리한 부분있는지 테스트
    if(shippingRules < 0) return new Error("오류 코드가 다 사라지지 않았습니다.");
    //코드들...
}
//최상위
let status; 
try {
    status = calculateShippingCosts(orderData);
} catch (error) {
    if(error instanceof OrderProcessingError)
        errorList.push({order:orderData, errorCode:statuts});
    else throw error;
    throw error;
}

if(status < 0) errorList.push({order:orderData, errorCode:statuts});

//별도 추가된 예외만들 처리하는 경우 처리방식
class OrderProcessingError extends Error{
    constructor(errorCode){
        super(`주문 처리 오류 : ${errorCode}`);
        this.code = errorCode;
    }
    get name(){return "OrderProcessingError";}
}