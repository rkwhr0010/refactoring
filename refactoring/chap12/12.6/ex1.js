class Employee{
    constructor(name, type){
        this.validateType(type);
        this._name = name;
        this._type = type;
    }
    //타입 코드 캡슐화
    get tpye(){return this._type;}
    validateType(arg){
        if(!["engineer","manager","salesperson"].includes(arg))
            throw new Error(`${arg}라는 직운 유형은 없습니다.`);
    }
    toString(){return `${this._name} (${this._type})`;}
}