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
class Scroll{
    constructor(id, title, tags, dateLastCleaned){
        this._id = id;//먼저 id를 내 속성으로 만들기
        this._catalogItem = new CatalogItem(null, title, tags);
        this._lastCleaned = dateLastCleaned;
    }
    get id(){return this._id;}
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

//스크롤 데이터 읽는 부분 코드
const scrolls = aDocument
    .map(record => new Scroll(record.id,
                                record.catalogData.title,
                                record.catalogData.tags,
                                LocalDate.parse(record.lastCleaned)));