//생성자를 팩터리 함수로 변경해 캡슐화
function createBooking(show, date){
    return new Booking(show, date);
}
function createPremiumBooing(show, date, extras){
    return new PremiumBooking(show, date, extras);
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

// 클라이언트 (일반 예약)
aBooking = new Booking(show, date);
// 클라이언트 (프리미엄 예약)
aBooking = new PremiumBooking(show, date, extras);


