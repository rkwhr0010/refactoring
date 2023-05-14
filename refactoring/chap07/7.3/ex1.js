//우선순위 자체가 아닌 우선순위를 표현하는 문자열 표현
class Order{
    constructor(data){
        this._priority = data.priority;
    }
    get priorityString(){return this._priority.toString();}
    set priority(aString){this._priority = new Priority(aString);}
}
class Priority{
    constructor(value){
        this._value = value;
    }
    toString(){return this._value;}
}

let highPriorityCount = orders.filter(o => "high" === o.priorityString
                                        || "rush" === o.priorityString)
                              .length;