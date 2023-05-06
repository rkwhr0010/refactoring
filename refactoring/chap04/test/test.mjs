import { describe } from "mocha";
import {Province, sampleProvinceData} from "../sample.mjs";
import { expect} from "chai"; 

describe('province', function(){
    //좋은 예시
    let asia;
    beforeEach(function(){
        asia = new Province(sampleProvinceData());
    })
    it('shortfall',function(){
        expect(asia.shortfall).equal(5);
    })
    it('profit', function(){
        expect(asia.profit).equal(230); 
    })
    it('change production', function(){
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
    })
    it('change production2', function(){
        asia.producers[0].production = 20;
        expect(asia.profit).equal(292);
    })
    it('zero demand', function(){
        asia.demand = 0; // 수요가없다.
        expect(asia.shortfall).equal(-25);
        expect(asia.profit).equal(0);
    })
    it('negative demand', function(){
        asia.demand = -1; // 수요가 마이너스
        expect(asia.shortfall).equal(-26);
        expect(asia.profit).equal(-10);
    })
})
describe('no producers', function(){
    let noProducers;
    this.beforeEach(function(){
        const data = {
            name : "No producers",
            producers : [],//비어있다.
            demand: 30,
            price: 20
        };
        noProducers = new Province(data);
    });
    it('shortfall', function(){
        expect(noProducers.shortfall).equal(30);
    });
    it('profit', function(){
        expect(noProducers.profit).equal(0);
    });
})