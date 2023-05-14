//현재 제일을 못하는 클래스라 가정
class TrackingInformation{
    get shippingCompany(){return this._shippingCompany;}
    set shippingCompany(arg){this._shippingCompany = arg;}
    get trackingNumber(){return this._trackingNumber;}
    set trackingNumber(arg){ his._trackingNumber = arg;}
    get display(){
        return `${this.shippingCompany} : ${this.trackingNumber}`;
    }
}

class Shipment{
    get trackingInfo(){
        return this._trackingInformation.display;
    }
    

    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}
//클라이언트
aShipment.trackingInformation.shippingCompany = request.vender;