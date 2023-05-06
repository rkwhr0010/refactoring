import { describe } from "mocha";
import {Province, sampleProvinceData} from "../sample.mjs";
import { expect} from "chai"; 

describe('no producers', function(){
    let noProducers;
    this.beforeEach(function(){
        const data = {
            name : "No producers",
            producers : [],
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