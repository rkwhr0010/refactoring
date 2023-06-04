class Employee{
    constructor(name){
    }
    get isPrivileged(){}
    assignCar(){}
}
//예시 : 공통 코드가 나중에 올때
class Manager extends Employee{
    constructor(name, grade){
        super(name);
        this._grade = grade;
        if(this.isPrivileged) this.assignCar();
    }
    get isPrivileged(){
        return this._grade >4;
    }
}