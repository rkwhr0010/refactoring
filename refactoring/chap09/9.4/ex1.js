//아직 전화번호가 올바로 설정되지 못하게 짜여 있다고 가정
class Person{
    constructor(){
        this._telephoneNumber = new TelephoneNumber();
    }
    get officeAreaCode(){return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg){this._telephoneNumber.areaCode = arg;}
    get officeNumber(){return this._telephoneNumber.officeNumber;}
    set officeNumber(arg){this._telephoneNumber.officeNumber = arg;}
}

class TelephoneNumber{
    get areaCode(){return this._areaCode;}
    set areaCode(arg){this._areaCode = arg;}
    get number(){return this._number;}
    set number(arg){this._number = arg;}
}