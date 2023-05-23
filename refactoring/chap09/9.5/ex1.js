class Order {
    constructor(data){
        this._number = data.number;
        this._customer = new CustomElementRegistry(data.customer);
        //여러 데이터...
    }
    get customer(){return this._customer;}
}
class Customer{
    constructor(id){
        this._id = id;
    }
    get id(){return this._id;}
}