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
    get shippingCompany(){return this._trackingInformation.shippingCompany;}
    set shippingCompany(arg){this._trackingInformation.shippingCompany = arg;}

    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}
//클라이언트- 호출부분에서 TrackingInformation 제거
let aShipment = new Shipment();
aShipment.shippingCompany = request.vender;