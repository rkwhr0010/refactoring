class Party{
    constructor(name){
        this._name = name;
    }
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
    //비슷한 로직은 좀 더 추상화된 쪽 이름으로, 혹은 추상화시켜 함수선언바꾸기
    get monthlyCost(){
        return this.staff
            .map(e=e.monthlyCost)
            .reduce((sum,cost)=>sum+cost);
    }
    get headCount(){
        return this.staff.length;
    }
    get annualCost(){
        return this.monthlyCost * 12;
    }
}