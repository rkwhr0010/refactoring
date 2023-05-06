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
    //총 수익 계산
    it('profit', function(){
        expect(asia.profit).equal(230); 
    })
})
