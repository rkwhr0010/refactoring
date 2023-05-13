//이 상수는 레코드 구조로 사용되는 객체
const organization = { name: "애크미 구스베리", country: "GB" };

//상수를 캡슐화하기
function getRawDataOfOrganization() {
    return organization
}
let result;
result += `<h1>${getRawDataOfOrganization().name}</h1>` //일기
getRawDataOfOrganization().name = '새로운 이름' // 쓰기
