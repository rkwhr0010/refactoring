import { describe } from "mocha";//Mocha 테스트 프레임워크
import {Province, sampleProvinceData} from "../sample.mjs";
import { expect, assert } from "chai"; // chai assert 라이브러리

describe('province', function(){
    it('shortfall',function(){
        const asia = new Province(sampleProvinceData()); //픽스처 설정
        assert.equal(asia.shortfall,5);//검증
    })
    it('shortfall2',function(){
        const asia = new Province(sampleProvinceData()); //픽스처 설정
        expect(asia.shortfall).equal(5);//검증
    })
})
