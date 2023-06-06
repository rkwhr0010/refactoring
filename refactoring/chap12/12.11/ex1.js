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
class Scroll{//상속관계를 끊는다.
    constructor(id, title, tags, dateLastCleaned){
        //슈퍼 클래스 참조를 하나 만들고 슈퍼클래스를 생성한다.
        this._catalogItem = new CatalogItem(id, title, tags);
        this._lastCleaned = dateLastCleaned;
    }
    //슈퍼 클래스에 대응하는 메서드를 만들고, 전달 메서드화 시킨다.
    get id(){return this._catalogItem._id;}
    get title(){return this._catalogItem._title;}
    hasTag(arg){return this._catalogItem._tags.includes(arg);}
    needsCleaning(targetDate){
        const threshold = this.hasTag("revered") ? 700 : 1500;
        return this.daySinceLastCleaning(targetDate) > threshold;
    }
    daySinceLastCleaning(targetDate){
        return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
    }
}