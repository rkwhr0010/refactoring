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
    //불변으로 만들기 위해 세터 제거 후 생성자로만 받는다.
    constructor(areaCode, number){
        this._areaCode = areaCode;
        this._number = number;
    }
    get areaCode(){return this._areaCode;}
    get number(){return this._number;}
}