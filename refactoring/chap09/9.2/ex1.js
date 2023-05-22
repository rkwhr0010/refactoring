const organization = {name: "애크미 구스베리",country:"GB"};
class Organization{
    constructor(data){
        //생성자 조정
        this._title = (data.title !== undefined) ? data.title : data.name;
        this._country = data.country;
    }
    get name(){return this._title;}
    set name(arg){ this._title = arg;}
    get country(){return this._country;}
    set country(arg){ this._country = arg;}
}