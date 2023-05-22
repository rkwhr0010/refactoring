const organization = new Organization({title: "애크미 구스베리",country:"GB"});
class Organization{
    constructor(data){
        this._title =  data.title;
        this._country = data.country;
    }
    get title(){return this._title;}
    set title(arg){ this._title = arg;}
    get country(){return this._country;}
    set country(arg){ this._country = arg;}
}