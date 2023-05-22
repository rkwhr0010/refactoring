function discount(inputValue, quantity){
    //적절한 이름으로 변경
    let result = inputValue;
    if(inputValue > 50) result = result - 2;
    if(quantity > 100) result = result - 1;
    return result;
}