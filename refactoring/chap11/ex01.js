function alertForMiscreant(people){
    for(const p of people){
        if(p==="조커"){
            setOffAlarms();
            return "조커";
        }
        if(p==="사루만"){
            setOffAlarms();
            return "사루만";
        }
    }
    return "";
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
const found = findMiscreant(people);