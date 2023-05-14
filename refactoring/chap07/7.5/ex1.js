class Person{
    constructor(){
        this._telphoneNumber = new TelephoneNumber();
    }
    get name(){return this._name;}
    set name(arg){this._name = arg;}
    get telephoneNumber(){return this._telphoneNumber.toString();}
    get officeAreaCode(){return this._telphoneNumber.areaCode;}
    set officeAreaCode(arg){this._telphoneNumber.areaCode = arg;}
    get officeNumber(){return this._telphoneNumber.number;}
    set officeNumber(arg){return this._telphoneNumber.number = arg;}
}
//새로 만든 클래스 이름 정리, 이 클래스는 순수한 전화번호이므로 사무실 이름을 제거 및 정리
class TelephoneNumber{
    get areaCode(){return this._areaCode;}
    set areaCode(arg){return this._areaCode = arg;}
    get number(){return this.number;}
    set number(arg){return this.number = arg;}
    toString(){return `(${this.areaCode}) ${this.number}`;}
}