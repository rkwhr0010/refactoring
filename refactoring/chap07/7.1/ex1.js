//이 상수는 레코드 구조로 사용되는 객체
const organization = {name:"애크미 구스베리", country:"GB"};

let result;
result += `<h1>${organization.name}</h1>` //일기
organization.name = '새로운 이름' // 쓰기