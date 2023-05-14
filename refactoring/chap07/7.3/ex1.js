class Order{
    constructor(data){
        this._priority = data.priority;
    }
    //정의한 클래스 사용하도록 변경
    get priorityString(){return this._priority.toString();}
    set priority(aString){this._priority = new Priority(aString);}
}
class Priority{
    constructor(value){
        this._value = value;
    }
    //get value() 가 아닌 변환함수 사용
    toString(){return this._value;}
}


//클라이언트
let highPriorityCount = orders.filter(o => "high" === o.priorityString
                                        || "rush" === o.priorityString)
                              .length;