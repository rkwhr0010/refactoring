const organization = new Organization({ name: "애크미 구스베리", country: "GB" });
function getOrganization(){return organization;}

let result;
result += `<h1>${getOrganization().name}</h1>` //일기
getOrganization().name = '새로운 이름' // 쓰기
//현재 레코드를 그대로 받아 사용하고 있다.
//레코드는 참조변수로 다루기에 캡슐화가 깨질 우려가 있다. 제거한다.
//만일 _data를 그대로 쓸 것이라면 복제해서 써야한다.
class Organization{
    constructor(data){
        this._name = data.name;
        this._country = data.country;
    }
    set name(aString){this._name = aString;}
    get name(){return this._name;}
    set _country(aString){this._country = aString;}
    get _country(){return this._country;}
}
