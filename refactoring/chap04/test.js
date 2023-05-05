//지역 전체를 표현하는 클래스
class Province { 
    //JSON 데이터로부터 지역 정보를 읽어온다.
    constructor(doc){
        this._name = doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach(d => this.addProducer(new Producer(this, d)));
    }
    addProducer(arg){
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }
}

function sampleProvinceData(){
    return {
        name : "Asia" ,
        producers : [
            {name:"Byzantium",  cost:10, production:9},
            {name:"Attalia",    cost:12, production:10},
            {name:"Sinope",     cost:10, production:6},
        ],
        demand : 30,
        price : 20
    };
}



