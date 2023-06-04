class Employee{
    constructor(name){
    }
    get isPrivileged(){}
    assignCar(){}
}
class Manager extends Employee{
    constructor(name, grade){
        super(name);
        this._grade = grade;
        this.finishConstruction();
    }
    //먼저 공통 코드를 함수로 추출
    finishConstruction() {
        if (this.isPrivileged)
            this.assignCar();
    }

    get isPrivileged(){
        return this._grade >4;
    }
}