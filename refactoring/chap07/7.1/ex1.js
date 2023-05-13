const organization = new Organization({ name: "애크미 구스베리", country: "GB" });
// function getRawDataOfOrganization() {return organization._data;} 정상동작하면 제거
function getOrganization(){return organization;}

let result;
result += `<h1>${getOrganization().name}</h1>` //일기
getOrganization().name = '새로운 이름' // 쓰기

//게터, 세터 생성 후 사용하도록 코드 수정
class Organization{
    constructor(data){
        this._data = data;
    }
    set name(aString){this._data.name = aString;}
    get name(){return this._data.name;}
}
