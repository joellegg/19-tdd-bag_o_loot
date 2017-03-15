'use strict';

const addChild = require('../lib/addChild');
const { assert: { isTrue, isArray, include, isFunction, isString } } = require('chai');

describe('addChild', () => {
  describe('addChild function', () => {
    it('should be a function', () => {
      isFunction(addChild);
    });
    it('should return true', () => {
      isTrue(addChild('suzy', 0, 1));
    });
  });
});
