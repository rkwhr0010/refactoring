import { describe } from "mocha";
import {Province, sampleProvinceData} from "../sample.mjs";
import { expect} from "chai"; 

describe('province', function(){
    const asia = new Province(sampleProvinceData()); //테스트 간 상호작용을 하는 안좋은 예시
    it('shortfall',function(){
        expect(asia.shortfall).equal(5);
    })
    //총 수익 계산
    it('profit', function(){
        expect(asia.profit).equal(230); 
    })
})
