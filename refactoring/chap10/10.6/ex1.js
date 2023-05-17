class Customer {
    applyDiscount(aNumber){
        if(!this.discountRate) return aNumber;
        else return aNumber - (this.discountRate * aNumber);
    }
    //문제 범위를 좁히기 위해 세터에 옮겼다.
    //applyDiscount에서 통과 못했을 때 추가로 추적을 해야 하기 때문이다.
    set discountRate(aNumber){
        assert(null === aNumber || aNumber >= 0);
        this._discountRate = aNumber;
    }
}