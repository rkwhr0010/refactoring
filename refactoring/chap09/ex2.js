function discount(originalInputValue, quantity){
    //call by value 로 가정, 값을 복사해서 쓴다.
    let inputValue = originalInputValue;
    if(inputValue > 50) inputValue = inputValue - 2;
    if(quantity > 100) inputValue = inputValue - 1;
    return inputValue;
}