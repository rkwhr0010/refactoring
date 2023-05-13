//이 상수는 레코드 구조로 사용되는 객체
const organization = new Organization({ name: "애크미 구스베리", country: "GB" });
//상수를 캡슐화하기, 이 게터는 임시 사용
function getRawDataOfOrganization() {return organization._data;}
function getOrganization(){return organization;}

let result;
result += `<h1>${getRawDataOfOrganization().name}</h1>` //일기
getRawDataOfOrganization().name = '새로운 이름' // 쓰기

//레코드를 캡슐화하는 목적은 변수를 통제하기 위함이다.
//그러기 위해선 레코드를 클래스로 바꿔야한다.
class Organization{
    constructor(data){
        this._data = data;
    }
}
