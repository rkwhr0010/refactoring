/*repository.mjs */
import {Order, Customer} from './ex1.mjs'
//물리적으로 똑같은 객체를 저장할 곳
export let _repositoryData;//저장소 객체

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

