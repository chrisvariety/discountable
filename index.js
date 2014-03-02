function discountable(amountInCents, percentOff, amountOffInCents) {
  var discount, appliedDiscount;

  if (percentOff) {
    discount = amountInCents * percentOff / 100;
  } else if (amountOffInCents) {
    discount = amountOffInCents;
  } else {
    discount = 0;
  }

  discount = Math.abs(discount);

  appliedDiscount = amountInCents - discount;

  if (appliedDiscount <= 0) {
    return 0;
  } else {
    return appliedDiscount;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = discountable;
} else {
  define('discountable', ['exports'], function (__exports__) { __exports__['default'] = discountable; });
}
