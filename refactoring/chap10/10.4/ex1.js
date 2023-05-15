function plumage(bird){
    return createBird(bird).plumage;
}
function speed(bird){
    return createBird(bird).airSpeedVelocity;
}
class Bird{
    constructor(birdObject){
        Object.assign(this. birdObject);
    }
    get plumage(){
        switch (this.type) {
        case "유럽 제비":
            return "보통이다";
        case "아프리카 제비":
            return (this.numberOfCocounts>2) ? "지쳤다" : "보통이다";
        case "노르웨이 파랑 앵무":
            return (this.voltage > 100) ? "그을렸다" : "예쁘다" ;
        default:
            return "알 수 없다";
        }
    }
    get airSpeedVelocity(){
        switch (this.type) {
        case "유럽 제비":
            return 35;
        case "아프리카 제비":
            return 40 -2 * this.numberOfCocounts;       
        case "노르웨이 파랑 앵무":
            return (this.isNailed) ? 0 : 10 + this.voltage /10;
        default:
            return null;
        }
    }
}
// 팩터리 메서드
function createBird(bird){
    switch (bird.type) {
    case "유럽 제비":
        return new EuropeanSwallow(bird);
    case "아프리카 제비":
        return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
        return new NorwegianBlueParrot(bird);
    default:
        return new Bird(bird);
    }
}
//서브클래스
class EuropeanSwallow extends Bird{

}
class AfricanSwallow extends Bird{

}
class NorwegianBlueParrot extends Bird{

}

