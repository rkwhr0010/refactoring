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
    //생성자에 젠더코드 추가
    constructor(name, genderCode){
        this._name = name;
        this._genderCode = genderCode || "X";
    }
    get isMale(){return this instanceof Male;}
    get name(){return this._name;}
    get genderCode(){return this._genderCode;}
}
class Male extends Person{
    get genderCode(){return "M";}
}
class Female extends Person{
    get genderCode(){return "F";}
}

//클라이언트
const numberOfMales = people.filter(p=>p.isMale).length;