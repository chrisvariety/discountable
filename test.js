var discountable = require('.');
var assert = require('assert');

describe('discountable', function() {
  it('prefers percentOff to amountOffInCents when both are given', function() {
    assert.equal(discountable(10, 50, 7), 5);
  });

  it('defaults to zero if not provided an amountOffInCents or percentOff', function() {
    assert.equal(discountable(10), 10);
  });

  describe('amountOffInCents', function() {
    it('calculates correctly', function() {
      assert.equal(discountable(10, null, 7), 3);
    });

    it('handles floats', function() {
      assert.equal(discountable(10, null, 5.5), 4.5);
    });

    it('will not go below zero', function() {
      assert.equal(discountable(10, null, 11), 0);
    });

    it('ignores negatives', function() {
      assert.equal(discountable(10, null, -3), 7);
    });
  });

  describe('percentOff', function() {
    it('calculates correctly', function() {
      assert.equal(discountable(10, 10), 9);
    });

    it('handles floats', function() {
      assert.equal(discountable(10, 10.5), 8.95);
    });

    it('calculates 100% off correctly', function() {
      assert.equal(discountable(10, 100), 0);
    });

    it('calculates > 100% off correctly', function() {
      assert.equal(discountable(10, 200), 0);
    });

    it('ignores negatives', function() {
      assert.equal(discountable(10, -50), 5);
    });
  });
});
