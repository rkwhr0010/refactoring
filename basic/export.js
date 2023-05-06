class User{
    constructor(name, age, gender){
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
    get name(){return this.name;}
    get age(){return this.age;}
    get gender(){return this.gender;}
}

export let users = [
    new User('홍길동',20,'남'),
    new User('임꺽정',25,'남'),
    new User('유관순',18,'여'),
    new User('신사임당',30,'여'),
];
