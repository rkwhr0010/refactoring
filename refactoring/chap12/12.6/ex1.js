//필요없어진 타입 코드 인자 제거
function createEmployee(name){
    switch(tpye){
        case "engineer" : return new Engineer(name);
        case "salesperson" : return new Salesperson(name);
        case "manager" : return new Manager(name);
        default : throw new Error(`${arg}라는 직운 유형은 없습니다.`);
    }
}

class Employee{
    constructor(name){
        this._name = name;
    }
    //서브 클래스에는 아직 type 코드 게터가 있다.
    toString(){return `${this._name} (${this.type})`;}
}
class Engineer extends Employee{
    get type(){return "engineer";}
}
class Salesperson extends Employee{
    get type(){return "salesperson";}
}
class Manager extends Employee{
    get type(){return "manager";}
}
