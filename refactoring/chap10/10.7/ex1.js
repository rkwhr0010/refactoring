function eaxmple(){
    checkForMiscreants(people);
}
//함수로 추출
function checkForMiscreants(people) {
    for (const p of people) {
        if (p === "조커") {
            sendAlert();
            return;
        }
        if (p === "사루만") {
            sendAlert();
            return;
        }
    }
}