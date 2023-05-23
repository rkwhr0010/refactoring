import {findCustomer, initialize,registerCustomer,_repositoryData} from './repository.mjs';

export class Order {
    constructor(data){
        this._number = data.number;
        this._customer = new Customer(data.customer);
        //여러 데이터...
    }
    get customer(){return this._customer;}
}
//불변 객체다. 

export class Customer{
    constructor(id){
        this._id = id;
    }
    get id(){return this._id;}
}
initialize();
registerCustomer("100");
registerCustomer("200");
registerCustomer("100");
console.log(findCustomer("100"));
console.log(_repositoryData);