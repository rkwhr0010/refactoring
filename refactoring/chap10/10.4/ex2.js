//팩터리 함수 사용하도록 수정
function rating(voyage, history){
    return createRating(voyage,history).value;
}
//기본 동작을 담당할 클래스
class Rating{
    constructor(voyage,history){
        this.voyage = voyage;
        this.history =history;
    }
    get value() {
        const vpf = this.voyageProfitFactor;
        const vr = this.voyageRisk;
        const chr = this.captainHistoryRisk;
        if(vpf * 3 > (vr+chr*2)) return "A";
        else return "B";
    }
    get voyageRisk(){//항해 경로 위험요소
        let result = 1;
        if(this.voyage.length > 4) result +=2;
        if(this.voyage.length > 8) result += this.voyage.length -8 ;
        if(["중국","동인도"].includes(this.voyage.zone)) result += 4;
        return Math.max(result,0);
    }
    
    get captainHistoryRisk(){//선장 향해 이력 위험요소
        let result = 1;
        if(this.history.length<5) result +=4;
        result += this.history.filter( v => v.profit < 0).length;
        if(this.voyage.zone ==="중국" && this.hasChinaHistory) result -= 2;
        return Math.max(result,0);
    }

    get voyageProfitFactor(){
        let result = 2;
        if(this.voyage.zone === "중국") result += 1;
        if(this.voyage.zone === "동인도") result += 1;
        if(this.voyage.zone === "중국" && this.hasChinaHistory) {
            result +=3;
            if(this.history.length>10) result += 1;
            if(this.voyage.length >12) result += 1;
            if(this.voyage.length >18) result -= 1;
        }else{
            if(this.history.length > 8) result +=1;
            if(this.voyage.length > 14) result -=1;
        }
        return result;
    }
    get hasChinaHistory(){ //중국을 경유하나
        return this.history.some(v=>"중국" === v.zone);
    }
}
//변형 동작을 담을 빈 서브 클래스
class ExperiencedChinaRating extends Rating{

}
//팩터리 함수
function createRating(voyage, history){
    if(voyage.zone === "중국" && history.some(v=>"중국" === v.zone))
        return new ExperiencedChinaRating(voyage,history);
    else return new Rating(voyage, history);
}


//호출 코드
const voyage = {zone:"서인도", length:10};
const history = [
    {zone : "동인도", profit: 5},
    {zone : "서인도", profit: 15},
    {zone : "중국", profit: -2},
    {zone : "서아프리카", profit: 7},
];
const myRating = rating(voyage, history);
console.log(myRating);