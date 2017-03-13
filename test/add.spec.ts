import * as assert from 'assert';
import {add} from '../libs/utils';

describe('Add Test', function () {
    it('Should add 2 + 3', function () {
        assert.equal(5, add(2, 3));
    });
});
