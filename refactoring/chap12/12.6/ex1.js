function createEmployee(name, type){
    switch(tpye){
        case "engineer" : return new Engineer(name,type);
        case "salesperson" : return new Salesperson(name,type);
        case "manager" : return new Manager(name,type);
        default : throw new Error(`${arg}라는 직운 유형은 없습니다.`);
    }
}

class Employee{
    //팩터리 메서드에서 검증은 대체가능 하니 제거
    constructor(name, type){
        this._name = name;
    }
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
