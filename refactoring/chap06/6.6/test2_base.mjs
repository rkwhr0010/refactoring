import {defaultOwner} from './test_refac.mjs';
import { strict as assert } from 'node:assert';
const owner1 = defaultOwner();
assert.equal("파울러",owner1.lastName,"처음 값 확인");
const owner2 = defaultOwner();
owner2.lastName ="파슨스";
assert.equal("파슨스",owner2.lastName,"owner2 변경 후");
