function trackSummary(points){
    const totalTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;
    return {
        time : totalTime,
        distance : totalDistance,
        pace : pace,
    };

    function calculateDistance() { //총 거리 계산
        let result = 0;
        for(let i = 1; i < points.length ; i++){
            result += distance(points[i-1], points[i]);
        }
        return result;
        //distance, radians 는 현재 문맥에서 calculateDistance에서만 사용중
        //따라서 calculateDistance()함수 안으로 옮기는게 적절하다.
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
    }
    function calculateTime() {/* 총 시간 계산 */} 
}
function top_calculateDistance(points) { 
    let result = 0;
    for(let i = 1; i < points.length ; i++){
        result += distance(points[i-1], points[i]);
    }
    return result;
}