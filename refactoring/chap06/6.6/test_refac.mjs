let spaceship = {};
//접근 제한자가 없는 언어에서는 이런 식으로 표현하는 것도 도움된다.
let __privateOnly_defaultOwner = {firstName:"마틴",lastName:"파울러"};
spaceship.owner = defaultOwner();
//저자는 자바스크립트에서는 게터에 get을 빼는 것을 선호함
export function defaultOwner(){return __privateOnly_defaultOwner;}
export function setDefaultOwner(arg){__privateOnly_defaultOwner = arg;}