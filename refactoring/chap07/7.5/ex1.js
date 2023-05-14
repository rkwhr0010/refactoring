class Person{
    constructor(){
        //인스턴스 저장해 두기
        this._telphoneNumber = new TelephoneNumber();
    }

    get name(){return this._name;}
    set name(arg){this._name = arg;}
    get telephoneNumber(){return `(${this.officeAreaCode}) ${this.officeNumber}`;}
    get officeAreaCode(){return this._officeAreaCode;}
    set officeAreaCode(arg){this._officeAreaCode = arg;}
    get officeNumber(){return this._officeNumber;}
    set officeNumber(arg){return this._officeNumber = arg;}
}
//추출할 클래스 정의
class TelephoneNumber{

}