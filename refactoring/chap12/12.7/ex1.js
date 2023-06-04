function createPerson(aRecord){
    switch (aRecord.gender){
        case 'M' : return new Male(aRecord.name); 
        case 'F' : return new Female(aRecord.name); 
        default : return new Person(aRecord.name); 
    }
}
function loadFromInput(data){
    return data.map(aRecord=>createPerson(aRecord));
}
class Person{
    constructor(name){
        this._name = name;
    }
    //타입 검사 코드를 함수로 추출
    get isMale(){return this instanceof Male;}
    get name(){return this._name;}
    get genderCode(){return "X";}
}
class Male extends Person{
    get genderCode(){return "M";}
}
class Female extends Person{
    get genderCode(){return "F";}
}

//클라이언트
//클라이언트에서 instanceof 연산자를 사용하는 것부터 구린내가 난다.
const numberOfMales = people.filter(p=>p.isMale).length;