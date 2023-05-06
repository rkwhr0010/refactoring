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
})
