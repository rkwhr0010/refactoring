class Person{
    constructor(name){
        this._name = name;
    }
    get name(){return this._name;}
    get manager(){return this.department.manager;}
}
class Department{
    get chargeCode(){return this._chargeCode;}
    set chargeCode(arg){this._chargeCode=arg;}
    get manager(){return this._manager;}
    set manager(arg){this._manager=arg;}
}
//클라이언트
let manager = aPerson.manager;