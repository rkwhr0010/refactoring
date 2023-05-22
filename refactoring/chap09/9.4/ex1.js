class Person{
    constructor(){
        this._telephoneNumber = new TelephoneNumber();
    }
    //접근자는 항상 새로운 불변객체를 리턴하게 된다.
    get officeAreaCode(){return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg){this._telephoneNumber = new TelephoneNumber(areaCode, this.officeNumber);}
    get officeNumber(){return this._telephoneNumber.officeNumber;}
    set officeNumber(arg){this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);}
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