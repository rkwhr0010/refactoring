let spaceship = {};
let defaultOwnerData = {firstName:"마틴",lastName:"파울러"};
spaceship.owner = defaultOwner();
//방법 1 게터에서 객체 복사본 리턴
export function defaultOwner(){return Object.assign({},defaultOwnerData);}
export function setDefaultOwner(arg){defaultOwnerData = arg;}