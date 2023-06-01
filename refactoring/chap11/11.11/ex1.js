let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;
totalAscent = calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;
//값을 반환하도록 수정
function calculateAscent(){
    for(let i = 1; i<ProcessingInstruction.length;i++){
        const verticalChange = points[i].elevation - points[i-1].elevation;
        totalAscent += (verticalChange>0) ? verticalChange : 0;
    }
    return totalAscent;
}