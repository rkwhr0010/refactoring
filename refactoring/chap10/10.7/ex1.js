function eaxmple(){
    checkForMiscreants(people);
}
//더 가다듬기
function checkForMiscreants(people) {
    if(people.some(p=>["조커","사루만"].includes(p))) sendAlert();
}