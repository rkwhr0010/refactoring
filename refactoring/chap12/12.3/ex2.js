class Employee{
    constructor(name){
    }
    get isPrivileged(){}
    assignCar(){}
    //슈퍼클래스로 옮김
    finishConstruction() {
        if (this.isPrivileged)
            this.assignCar();
    }
}
class Manager extends Employee{
    constructor(name, grade){
        super(name);
        this._grade = grade;
        this.finishConstruction();
    }
    get isPrivileged(){
        return this._grade >4;
    }
}