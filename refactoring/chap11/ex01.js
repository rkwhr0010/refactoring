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
//함수 복제 후 질의 목적에 맞는 이름 짓기
function findMiscreant(people){
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