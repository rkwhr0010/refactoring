class Person{
    constructor(){
        this._telephoneNumber = new TelephoneNumber();
    }
    get officeAreaCode(){return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg){this._telephoneNumber = new TelephoneNumber(areaCode, this.officeNumber);}
    get officeNumber(){return this._telephoneNumber.officeNumber;}
    set officeNumber(arg){this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);}
}

class TelephoneNumber{
    constructor(areaCode, number){
        this._areaCode = areaCode;
        this._number = number;
    }
    get areaCode(){return this._areaCode;}
    get number(){return this._number;}
    //논리적 동치성 검사 메서드
    equals(other){
        if(!(other instanceof TelephoneNumber)) return false;
        return Object.keys(this).every(a=>this[a] === other[a]);
    }
}
const t1 = new TelephoneNumber("12345","67890");
const t2 = new TelephoneNumber("12345","67890");

console.log(t1.equals(t2));
