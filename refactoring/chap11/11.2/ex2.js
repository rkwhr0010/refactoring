function baseCharge(usage){
    if(usage < 0) return usd(0);
    const amount = bottomBand(usage) * 0.03
        + withinBand(usage, 100, 200) * 0.05
        + topBand(usage) * 0.07;
    return usd(amount);
}
function bottomBand(usage){
    return Math.min(usage, 100);
}
//통합할 함수를 선정할 때 보통 중간 함수가 적절
//매개변수화 하여 넣기
function withinBand(usage,bottom,top){
    return usage > bottom ? Math.min(usage,top) - bottom : 0;
}
function topBand(usage){
    return usage > 200 ? usage - 200 : 0;
}