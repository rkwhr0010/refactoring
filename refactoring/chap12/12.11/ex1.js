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
//오래된 스크롤에 정기 세척 이력 필요해 만듦
class Scroll extends CatalogItem{
    constructor(id, title, tags, dateLastCleaned){
        super(id, title, tags);
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