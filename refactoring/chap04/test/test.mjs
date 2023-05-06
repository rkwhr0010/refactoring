import { describe } from "mocha";
import {Province, sampleProvinceData} from "../sample.mjs";
import { expect} from "chai"; 

describe('province', function(){
    it('shortfall',function(){
        const asia = new Province(sampleProvinceData()); 
        expect(asia.shortfall).equal(5);
    })
    //총 수익 계산
    it('profit', function(){
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230); 
    })
})
