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
//메서드 호출에 리터럴을 쓰는 것은 악취다
const candidate2 = createEmployee(document.name, 'E');
//팩터리 메서드 이름을 이용해 악취를 제거한다.
function createEngineer(name){
    return new Employee(name, "E");
}