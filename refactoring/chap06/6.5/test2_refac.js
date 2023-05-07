class Book{
    addReservation(customer){
        this.zz_addReservation(customer);
    }
    //임시이름
    zz_addReservation(customer) {
        this._reservations.push(customer);
    }
}