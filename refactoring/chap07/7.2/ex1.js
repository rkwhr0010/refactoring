class Person{
    constructor(name){
        this._name = name;
        this._courses = [];
    }
    get name(){return this._name;}
    get courses(){return this._courses;}
    //세터를 제거한다. 만약 제공해야한다면 복사본을 저장한다.
    // set courses(aList){this.courses = _.cloneDeep(aList);}
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
for(const name of basicCourseNames){
    aPerson.courses.addCourse(new Course(name,false));
}
