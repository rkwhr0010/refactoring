class Order {
    constructor(data){
        this._number = data.number;
        this._customer = new Customer(data.customer);
        //여러 데이터...
    }
    get customer(){return this._customer;}
}
//불변 객체다. 
class Customer{
    constructor(id){
        this._id = id;
    }
    get id(){return this._id;}
}


//물리적으로 똑같은 객체를 저장할 곳
let _repositoryData;//저장소 객체

export function initialize(){
    _repositoryData = {};
    _repositoryData.customers = new Map();
}

export function registerCustomer(id){
    if(!_repositoryData.customers.has(id)){
        _repositoryData.customers.set(id, new Customer(id));
    }
    return findCustomer(id);
}
export function findCustomer(id){
    return _repositoryData.customers.get(id);
}
