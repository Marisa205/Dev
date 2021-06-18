const sum = require('../');
const assert = require('assert');

describe('Sum', () => {
  it('should handle positive numbers', () => {
    assert.equal(sum(3, 5), 8);
  });
 it('should handle prime numbers', () => {
    assert.equal(sum(2, 3), 5);
  });
  it('should handle negative numbers', () => {
    assert.equal(sum(3, -5), -2);
  });
  it('should handle decimals', () => {
    assert.equal(sum(3.5, 7.1), 10.6);
  });
});
