class Person{
    constructor(name){
        this._name = name;
        this._courses = [];
    }
    get name(){return this._name;}
    get courses(){return this._courses;}
    set courses(arg){this.courses = arg;}
}
class Course {
    constructor(name, isAdvanced){
        this._name = name;
        this._isAdvanced = isAdvanced;
    }
    get name(){return this._name;}
    get isAdvanced(){return this._isAdvanced;}
}
//클라이언트 Person이 제공하는 수업 컬렉션에서 수업 정보 얻음
let numAdvancedCourses;
numAdvancedCourses = aPerson.courses
    .filter(c=>c.isAdvanced)
    .length;
