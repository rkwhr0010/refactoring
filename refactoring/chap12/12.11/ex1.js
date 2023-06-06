class CatalogItem{
    constructor(id, title, tags){
        this._id = id;
        this._title = title;
        this._tags = tags;
    }
    get id(){return this._id;}
    get title(){return this._title;}
    hasTag(arg){return this._tags.includes(arg);}
}
class Scroll extends CatalogItem{
    constructor(id, title, tags, dateLastCleaned){
        super(id, title, tags);
        //슈퍼 클래스 참조를 하나 만들고 슈퍼클래스를 생성한다.
        this._catalogItem = new CatalogItem(id, title, tags);
        this._lastCleaned = dateLastCleaned;
    }
    needsCleaning(targetDate){
        const threshold = this.hasTag("revered") ? 700 : 1500;
        return this.daySinceLastCleaning(targetDate) > threshold;
    }
    daySinceLastCleaning(targetDate){
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
}