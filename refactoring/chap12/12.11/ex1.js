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
class Scroll{//먼저 적절한 저장소 찾기 또는 만들기, 여기선 적절한 저장소가 있다고 가정(catalog)
    constructor(id, dateLastCleaned,catalogID, catalog){
        this._id = id;
        this._catalogItem = catalog.get(catalogID);
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
                                LocalDate.parse(record.lastCleaned),
                                record.catalogData.id,
                                catalog ));