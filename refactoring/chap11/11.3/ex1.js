function bookConcert(aCustomer, isPreminum){
    if(isPreminum){
        // 프리미엄 예약용 로직
    }else{
        // 일반 예약용 로직
    }
}
//호출하는 쪽 예시
bookConcert(aCustomer, true);
bookConcert(aCustomer, Customer.PREMINUM);
bookConcert(aCustomer,"premium");
