function createBooking(show, date){
    return new Booking(show, date);
}
//프리미엄 예약을 대체할 새로운 위임을 연결
function createPremiumBooking(show, date, extras){
    const result = new PremiumBooking(show, date, extras);
    result._bePremium(extras);
    return result;
}


class Booking{
    constructor(show, date){
        this._show = show;
        this._date = date;
    }
    get hasTalkback(){
        return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    get basePrice(){
        let result = this._show.price;
        if(this.isPeakDay) result += Math.round(result * 0.15);
        return result;
    }
    //이메서드가 private이라는 의미로 _ 붙임
    _bePremium(extras){
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
}

class PremiumBooking extends Booking{
    constructor(show, date, extras){
        super(show, date);
        this._extras = extras;
    }
    get hasTalkback(){
        return this._show.hasOwnProperty('talkback');
    }
    get basePrice(){
        return Math.round(super.basePrice + this._extras.premiumFee);
    }
    get hasDinner(){
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
    }
}
//위임 클래스 만들기
class PremiumBookingDelegate{
    constructor(hostBooking, extras){
        //서브클래스는 super 키워드로 부모 클래스 멤버에 쉽게 접근할 수 있지만,
        //위임에선 역참조가 필수다.
        this._host = hostBooking;
        this._extras =extras;
    }
}

// 클라이언트 (일반 예약)
aBooking = createBooking(show, date);
// 클라이언트 (프리미엄 예약)
aBooking = createPremiumBooking(show, date, extras);