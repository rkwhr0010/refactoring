class Observable{
    constructor(){
        this._observers = [];
        this._data = '123123';
    }
    set data(arg){
        this._data = arg;
    }
    get data(){
        return this._data;
    }
    addObserver(observer){
        this._observers.push(observer);
    }

    allNotify(){
        this._observers
            .forEach(o=>o.update(this._data));
    }
}
class Observber{
    constructor(){
        this._data = {};
    }
    update(observable){
        if(!observable instanceof Observable) return;
        this._data = observable.data;
    }
}


class Data{
    constructor(){
        this._data = '123123';
    }
    set data(arg){this._data=arg;}
    get data(){return this.data;}
}