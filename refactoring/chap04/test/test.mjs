import { describe } from "mocha";
import {Province, sampleProvinceData} from "../sample.mjs";
import { expect, assert } from "chai"; 

describe('province', function(){
    it('shortfall',function(){
        const asia = new Province(sampleProvinceData()); 
        assert.equal(asia.shortfall,5);
    })
    it('shortfall2',function(){
        const asia = new Province(sampleProvinceData()); 
        expect(asia.shortfall).equal(5);
    })
    it('profit', function(){
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230); 
    })
})
