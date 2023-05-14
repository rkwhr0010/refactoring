//클라이언트
let manager = aPerson.department.manager;

class Person{
    //게터 추가 후 클라이언트 코드 수정 후 위임(중개) 메서드 제거
    get department(){return this._department;}
}
class Department{
    get manager(){return this._manager;}
}