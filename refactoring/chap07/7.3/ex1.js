//Priority 클래스를 직접 사용하는 것이 좋을 것 같아 추가 개선
class Order{
    constructor(data){
        this._priority = data.priority;
    }
    get priority(){return this._priority;}
    get priorityString(){return this._priority.toString();}
    set priority(aString){this._priority = new Priority(aString);}
}
class Priority{
    constructor(value){
        if(value instanceof Priority) return value;
        if(Priority.legalValues().includes(value)) this._value = value;
        else throw new Error(`<${value}>는 요효하지 않은 우선순위입니다.`);
    }
    toString(){return this._value;}
    get _index(){return Priority.legalValues().findIndex(s=>s===this._value);}
    static legalValues(){return ['low','normal','high','rush'];}
    equals(other){return this._index === other._index;}
    higherThan(other){return this._index > other._index;}
    lowerThan(other){return this._index < other._index;}
    compareTo(other){return this._index - other._index;}
}

let highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal")))
                              .length;