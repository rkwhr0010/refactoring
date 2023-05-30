function alertForMiscreant(people){
    if(findMiscreant(people)!=="") setOffAlarms();
}
function findMiscreant(people){
    for(const p of people){
        if(p==="조커") return "조커";
        if(p==="사루만") return "사루만";
    }
    return "";
}
//원래 함수 호출하던 곳, 새로 만든 질의함수로 바꾸기
// const found = alertForMiscreant(people);
<<<<<<< HEAD:refactoring/chap11/11.1/ex01.js
const found = findMiscreant(people); //질의
alertForMiscreant(people);//명령
=======
const found = findMiscreant(people);
>>>>>>> main:refactoring/chap11/ex01.js
