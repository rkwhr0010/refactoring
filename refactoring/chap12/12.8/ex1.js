class Party{
    constructor(name){
        this._name = name;
    }
    //옮긴 데이터 관련 메서드 올리기
    get name() {return this._name;}
} 
class Employee extends Party{
    constructor(name, id, monthlyCost){
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
    get monthlyCost() {return this._monthlyCost;}
    get id() {return this._id;}
    get annualCost(){ return this._monthlyCost * 12; }
}
class Department extends Party{
    constructor(name, staff){
        super(name);
        this._staff = staff;
    }
    get staff(){return this._staff.slice();}
    get totalMonthlyCost(){
        return this.staff
            .map(e=e.monthlyCost)
            .reduce((sum,cost)=>sum+cost);
    }
    get headCount(){
        return this.staff.length;
    }
    get totalAnnualCost(){
        return this.totalMonthlyCost * 12;
    }
}