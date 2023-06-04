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
    toString(){return `${this._name} (${this.type})`;}//_ 없음
}
//서브 클래스 오버라이딩
class Engineer extends Employee{
    get type(){return "engineer";}
}
