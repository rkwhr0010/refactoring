//가장 먼저 팩터리 함수 작성
function createEmployee(name, typeCode){
    return new Employee(name,typeCode);
}

class Employee{
    constructor(name, typeCode){
        this._name = name;
        this.typeCode = typeCode;
    }
    get name(){return this._name;}
    get type(){
        return Employee.legalTypeCodes[this._typeCode];
    }
    static get legalTypeCodes(){
        return {"E" : "Engineer","M":"Manager","S":"Salesperson"};
    }
}
//클라이언트
const candidate = new Employee(document.name, document.empType);
