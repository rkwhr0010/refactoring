function plumages(birds){
    return new Map(birds
                    .map(b=> createBird(b))
                    .map(bird => [bird.name, bird.plumage]));
}
function speeds(birds){
    return new Map(birds
                    .map(b=> createBird(b))
                    .map(bird => [bird.name, bird.airSpeedVelocity]));
}
/**제거 해도된다. 자바스크립트는 타입 계층 구조가 없어도
 * 객체들이 같은 메서드 선부만 가지면, 같은 타입으로 인식해 다형성을 구현할 수 있다.
 * 이를 덕타이핑이라한다.
 */
class Bird{
    constructor(birdObject){
        Object.assign(this. birdObject);
    }
    get plumage(){
        return "알 수 없다";
    }
    get airSpeedVelocity(){
        return null;
    }
}
 
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
class EuropeanSwallow extends Bird{
    get plumage(){
        return "보통이다";
    }
    get airSpeedVelocity(){
        return 35;
    }
}
class AfricanSwallow extends Bird{
    get plumage(){
        return (this.numberOfCocounts>2) ? "지쳤다" : "보통이다";
    }
    get airSpeedVelocity(){
        return 40 -2 * this.numberOfCocounts;      
    }
}
class NorwegianBlueParrot extends Bird{
    get plumage(){
        return (this.voltage > 100) ? "그을렸다" : "예쁘다" ;
    }
    get airSpeedVelocity(){
        return (this.isNailed) ? 0 : 10 + this.voltage /10;
    }
}