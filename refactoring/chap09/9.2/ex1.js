const organization = {name: "애크미 구스베리",country:"GB"};
//organization 레코드 클래스로 캡슐화
class Organization{
    constructor(data){
        this._name = data.name;
        this._country = data.country;
    }
    get name(){return this._name;}
    set name(arg){ this._name = arg;}
    get country(){return this._country;}
    set country(arg){ this._country = arg;}
    
}