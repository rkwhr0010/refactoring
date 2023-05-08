let spaceship = {};

let defaultOwner = {firstName:"마틴",lastName:"파울러"};
//참조하는 코드
spaceship.owner = defaultOwner;
//갱신하는 코드(불변이라면 갱신 걱정이 없다)
defaultOwner = {firstName:"레베카",lastName:"파슨스"};
