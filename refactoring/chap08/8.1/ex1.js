function trackSummary(points){
    const totalTime = calculateTime();
    const pace = totalTime / 60 / totalDistance();
    return {
        time : totalTime,
        distance : totalDistance(),
        pace : pace,
    };
    function calculateTime() {/* 총 시간 계산 */} 
}
function totalDistance(points) { 
    let result = 0;
    for(let i = 1; i < points.length ; i++){
        result += distance(points[i-1], points[i]);
    }
    return result;
}
//distance, radians도 totalDistance안에 어떤 것도 의존하지 않으니
//최상단으로 옮겼다.
function distance(p1, p2) {
    const EARTH_RADIUS = 3959; // 단위 마일
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);
    const a = Math.pow(Math.sin(dLat / 2), 2)
        + Math.cos(radians(p2.lat))
        * Math.cos(radians(p1.lat))
        * Math.pow(Math.sin(dLon /2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return EARTH_RADIUS * c;
} 
function radians(degrees) {
    return degrees * Math.PI / 180;
} 