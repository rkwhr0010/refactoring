function localShippingRules(country){//country 는 항상 유효함을 가정
    const data = countryData.shippingRules[country];
    if(data) return new shippingRules(data);
    //오류 코드 대신 예외를 던진다.
    else return new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder){
    //코드들...
    const shippingRules = localShippingRules(anOrder.country);
    //코드들...
}
//최상위
try {
    calculateShippingCosts(orderData);
} catch (error) {
    if(error instanceof OrderProcessingError)
        errorList.push({order:orderData, errorCode:statuts});
    else throw error;
    throw error;
}

class OrderProcessingError extends Error{
    constructor(errorCode){
        super(`주문 처리 오류 : ${errorCode}`);
        this.code = errorCode;
    }
    get name(){return "OrderProcessingError";}
}