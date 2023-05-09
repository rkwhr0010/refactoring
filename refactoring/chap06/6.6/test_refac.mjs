let defaultOwnerData = {firstName:"마틴",lastName:"파울러"};
//방법 2 레코드 캡슐화하기
export function defaultOwner(){return new Person(defaultOwnerData);}
export function setDefaultOwner(arg){defaultOwnerData = arg;}
class Person{
    constructor(data){
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }
    get lastName(){return this._lastName;}
    get firstName(){return this._firstName;}
}
