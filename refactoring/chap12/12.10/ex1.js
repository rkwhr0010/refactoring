function createBooking(show, date){
    return new Booking(show, date);
}
function createPremiumBooking(show, date, extras){
    const result = new Booking(show, date, extras);
    result._bePremium(extras);
    return result;
}

class Booking{
    constructor(show, date){
        this._show = show;
        this._date = date;
    }
    get hasTalkback(){
        return (this._premiumDelegate) 
            ? this._premiumDelegate.hasTalkback 
            : this._show.hasOwnProperty('talkback') && !this.isPeakDay;
    }
    get basePrice(){
        let result = this._show.price;
        if(this.isPeakDay) result += Math.round(result * 0.15);
        return (this._premiumDelegate)
            ? this._premiumDelegate.extendBasePrice(result)
            : result;
    }
    
    _bePremium(extras){
        this._premiumDelegate = new PremiumBookingDelegate(this, extras);
    }
    get hasDinner(){
        return (this._premiumDelegate)
            ? this._premiumDelegate.hasDinner
            : undefined; 
    }
}

//위임 클래스
class PremiumBookingDelegate{
    constructor(hostBooking, extras){
        this._host = hostBooking;
        this._extras =extras;
    }
    get hasTalkback(){
        return this._host._show.hasOwnProperty('talkback');
    }
    extendBasePrice(base){
        return Math.round(base + this._extras.premiumFee);
    }
    get hasDinner(){
        return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
    }
}

// 클라이언트 (일반 예약)
aBooking = createBooking(show, date);
// 클라이언트 (프리미엄 예약)
aBooking = createPremiumBooking(show, date, extras);