function createEmployee(name, type){
    switch(tpye){
        case "engineer" : return new Engineer(name,type);
        case "salesperson" : return new Salesperson(name,type);
        case "manager" : return new Manager(name,type);
    }
    return new Employee(name, type);
}

class Employee{
    constructor(name, type){
        this.validateType(type);
        this._name = name;
        this._type = type;
    }
    get tpye(){return this._type;}
    validateType(arg){
        if(!["engineer","manager","salesperson"].includes(arg))
            throw new Error(`${arg}라는 직운 유형은 없습니다.`);
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
