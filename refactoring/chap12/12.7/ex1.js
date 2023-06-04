//직관적으로 생성자 마다 팩터리 메서드를 만들 경우
function createPerson(name){
    return new Person(name);
}
function createMale(name){
    return new Male(name);
}
function createFemale(name){
    return new Female(name);
}
//결국, 리팩터링하면 큰 의미가 없다.
function loadFromInput(data){
    const result = [];
    data.forEach(aRecord=>{
        let p;
        switch (aRecord.gender){
            case 'M' : p = new Male(aRecord.name); break;
            case 'F' : p = new Female(aRecord.name); break;
            default : p = new Person(aRecord.name); 
        }
        result.push(p);
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