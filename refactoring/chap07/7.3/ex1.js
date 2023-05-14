class Order{
    constructor(data){
        this._priority = data.priority;
    }
    //변수부터 캡슐화
    get priority(){return this._priority;}
    set priority(arg){this._priority = arg;}
}
//클라이언트
let highPriorityCount = orders.filter(o => "high" === o.priority
                                        || "rush" === o.priority)
                              .length;