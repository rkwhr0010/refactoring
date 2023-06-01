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
//클라이언트, 생성자 호출 코드 대체
const candidate = createEmployee(document.name, document.empType);
