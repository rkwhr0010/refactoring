class Person{
    constructor(name){
        this._name = name;
        this._courses = [];
    }
    get name(){return this._name;}
    get courses(){return this._courses;}
    set courses(arg){this.courses = arg;}
    //제대로된 캡슐화를 위해 수업추가/제거 메서드 추가
    addCourse(aCourse){
        this._courses.push(aCourse);
    }
    removeCourse(aCourse, fnIfAbsent= () => {throw new RangeError();}){
        const index = this._courses.indexOf(aCourse);
        if(index=== -1) fnIfAbsent();
        else this._courses.splice(index,1);
    }
}
class Course {
    constructor(name, isAdvanced){
        this._name = name;
        this._isAdvanced = isAdvanced;
    }
    get name(){return this._name;}
    get isAdvanced(){return this._isAdvanced;}
}

let numAdvancedCourses;
numAdvancedCourses = aPerson.courses
    .filter(c=>c.isAdvanced)
    .length;


const basicCourseNames = readBasicCourseNames(filename);
//만들어둔 메서드를 사용해야해서, 이제 이방식으론 저장 못한다.
aPerson.courses = basicCourseNames.map(name => new Course(name, false));
for(const name of basicCourseNames){
    aPerson.courses.addCourse(new Course(name,false));
}
