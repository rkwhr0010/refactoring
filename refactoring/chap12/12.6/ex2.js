class EmployeeType{
    get capitalizedName(){
        return this.toString().charAt(0).toUpperCase() 
        + this.toString().substr(1).toLowerCase();
    }
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
        this._type = this.createEmployeeType(type);
    }
    static createEmployeeType(aString){
        switch(aString){
            case "engineer" : return new Engineer();
            case "salesperson" : return new Salesperson();
            case "manager" : return new Manager();
            default : throw new Error(`${aString}라는 직원 유형은 없습니다.`);
        }
    }
    get typeString() {return this._type.toString();}
    get type(){return this._type;}
    set type(arg){this._type = Employee.createEmployeeType(arg);}


    toString(){
        return `${this._name} (${this.type.capitalizedName})`;
    }
}
