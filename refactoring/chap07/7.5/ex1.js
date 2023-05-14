class Person{
    constructor(){
        this._telphoneNumber = new TelephoneNumber();
    }
    get name(){return this._name;}
    set name(arg){this._name = arg;}
    get telephoneNumber(){return this._telphoneNumber.telephoneNumber;}
    get officeAreaCode(){return this._telphoneNumber.officeAreaCode;}
    set officeAreaCode(arg){this._telphoneNumber.officeAreaCode = arg;}
    get officeNumber(){return this._telphoneNumber.officeNumber;}
    set officeNumber(arg){return this._telphoneNumber.officeNumber = arg;}
}
class TelephoneNumber{
    get officeAreaCode(){return this._officeAreaCode;}
    set officeAreaCode(arg){return this._officeAreaCode = arg;}
    get officeNumber(){return this._officeNumber;}
    set officeNumber(arg){return this._officeNumber = arg;}
    get telephoneNumber(){return `(${this.officeAreaCode}) ${this.officeNumber}`;}
}