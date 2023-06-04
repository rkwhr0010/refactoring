//생성할 클래스를 선택하는 로직을 함수로 추출하는 것이 더 낫다.
function createPerson(aRecord){
    let p;
    switch (aRecord.gender){
        case 'M' : p = new Male(aRecord.name); break;
        case 'F' : p = new Female(aRecord.name); break;
        default : p = new Person(aRecord.name); 
    }
    return p;
}
function loadFromInput(data){
    const result = [];
    data.forEach(aRecord=>{
        result.push(createPerson(aRecord));
    });
    return result;
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