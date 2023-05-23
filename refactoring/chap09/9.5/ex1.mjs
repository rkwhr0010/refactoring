/* ex1.mjs */
import {findCustomer, initialize,registerCustomer,_repositoryData} from './repository.mjs';

export class Order {
    constructor(data){
        this._number = data.number;
        this._customer = registerCustomer(data.customer);
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
    set id(arg){this._id = arg;}
}
initialize();


const customer1 = new Customer("10");
const orders = [];

orders.push(new Order({number:1 , customer:"10"}));
orders.push(new Order({number:2 , customer:"10"}));
orders.push(new Order({number:3 , customer:"10"}));
orders.push(new Order({number:4 , customer:"10"}));

console.log(_repositoryData);
orders.forEach(o=>console.log(o));
findCustomer("10").id = "20";
orders.forEach(o=>console.log(o));
