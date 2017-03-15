'use strict';

const listToysChild = require('../lib/listToys');
const { assert: { isTrue, isArray, include, isFunction, isString } } = require('chai');

describe('listToys', () => {
  describe('listToysChild function', () => {
    it('should be a function', () => {
      isFunction(listToysChild);
    });
    it('should return true if a list is returned', () => {
      isTrue(listToysChild('suzy'));
    });
  });
});
