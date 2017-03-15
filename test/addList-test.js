'use strict';

const addList = require('../lib/addList');
const { assert: { isTrue, isArray, include, isFunction, isString } } = require('chai');

describe('addList', () => {
  describe('addList function', () => {
    it('should be a function', () => {
      isFunction(addList);
    });
    it('should return true if a list is added', () => {
      isTrue(addList('suzy', 'ball'));
    });
  });
});
