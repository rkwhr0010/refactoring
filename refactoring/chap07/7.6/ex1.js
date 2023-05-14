class Shipment{
    get trackingInfo(){
        return this._trackingInformation.display;
    }
    get display(){
        return `${this.shippingCompany} : ${this.trackingNumber}`;
    }
    //나머지도 옮긴 후 클래스 TrackingInformation 제거
    get shippingCompany(){return this._shippingCompany;}
    set shippingCompany(arg){this._shippingCompany = arg;}
    get display(){
        return `${this.shippingCompany} : ${this.trackingNumber}`;
    }

    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}
let aShipment = new Shipment();
aShipment.shippingCompany = request.vender;