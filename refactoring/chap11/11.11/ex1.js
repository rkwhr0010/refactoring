let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;
totalAscent = calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent(){
    let result  = 0; //적절한 이름으로 변경
    for(let i = 1; i<ProcessingInstruction.length;i++){
        const verticalChange = points[i].elevation - points[i-1].elevation;
        result += (verticalChange>0) ? verticalChange : 0;
    }
    return result;
}