'use strict';

const addToy = require('../lib/addToy');
const { assert: { isTrue, isArray, include, isFunction, isString } } = require('chai');

describe('addToy', () => {
  describe('addToy function', () => {
    it('should be a function', () => {
      isFunction(addToy);
    });
    it('should return true if a toy is added', () => {
      isTrue(addToy('ball'));
    });
  });
});
