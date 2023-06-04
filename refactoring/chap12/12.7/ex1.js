function createPerson(aRecord){
    switch (aRecord.gender){
        //하나씩 서브클래스 제거
        case 'M' : return new Person(aRecord.name, "M"); 
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
    get isMale(){return "M"=== this._genderCode;}
    get name(){return this._name;}
    get genderCode(){return this._genderCode;}
}
class Female extends Person{
    get genderCode(){return "F";}
}

//클라이언트
const numberOfMales = people.filter(p=>p.isMale).length;