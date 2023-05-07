class Book{
    addReservation(customer){
        this.zz_addReservation(customer, false);
    }
    //매개변수 추가
    zz_addReservation(customer,isPriority) {
        //자바스크립트 한정 assert 테스트
        assert(isPriority === true || isPriority === false);
        this._reservations.push(customer);
    }
}