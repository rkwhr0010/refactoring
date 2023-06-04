//두 함수 다듬기 
function createPerson(aRecord){
    switch (aRecord.gender){
        case 'M' : return new Male(aRecord.name); 
        case 'F' : return new Female(aRecord.name); 
        default : return new Person(aRecord.name); 
    }
}
//반복문 파이프라인으로 바꾸기
function loadFromInput(data){
    return data.map(aRecord=>createPerson(aRecord));
}



class Person{
    constructor(name){
        this._name = name;
    }
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
const numberOfMales = people.filter(p=>p instanceof Male).length;