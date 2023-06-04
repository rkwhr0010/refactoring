class EmployeeType{
}
class Engineer extends EmployeeType{
    toString(){return "engineer";}
}
class Salesperson extends EmployeeType{
    toString(){return "salesperson";}
}
class Manager extends EmployeeType{
    toString(){return "manager";}
}
class Employee{
    constructor(name,type){
        this._name = name;
        this._type = type;
    }
    static createEmployeeType(aString){
        switch(aString){
            case "engineer" : return new Engineer();
            case "salesperson" : return new Salesperson();
            case "manager" : return new Manager();
            default : throw new Error(`${aString}라는 직운 유형은 없습니다.`);
        }
    }
    get typeString() {return this._type.toString();}
    get type(){return this._type;}
    set type(arg){this._type = Employee.createEmployeeType(arg);}

    get capitalizedType(){
        return this.typeString.charAt(0).toUpperCase() 
        + this.typeString.substr(1).toLowerCase();
    }
    toString(){
        return `${this._name} (${this.capitalizedType})`;
    }
}
