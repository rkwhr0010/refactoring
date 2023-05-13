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


//클라이언트
const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false));
//Person에서 게터로 수업컬렉션을 못가져오지만
//내가 수업 컬렉션을 세터로 설정하면, 수업 컬렉션을 수정해 캡슐화가 깨질 수 있다.
