class Order{
    constructor(data){
        this._priority = data.priority;
    }
    get priority(){return this._priority;}
    set priority(arg){this._priority = arg;}
}
//우선순위 속성을 표현하는 값 클래스 정의
class Priority{
    constructor(value){
        this._value = value;
    }
    toString(){return this._value;}
}


//클라이언트
let highPriorityCount = orders.filter(o => "high" === o.priority
                                        || "rush" === o.priority)
                              .length;