let spaceship = {};
let defaultOwner = {firstName:"마틴",lastName:"파울러"};
spaceship.owner = defaultOwner;
defaultOwner = {firstName:"레베카",lastName:"파슨스"};
//게터/세터 생성
function getDefaultOwner(){return defaultOwner;}
function setDefaultOwner(arg){return defaultOwner = arg;}