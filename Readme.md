## discountable


## Usage

```js
var discountable = require('discountable');
discountable(amountInCents, percentOff, amountOffInCents);
```

Accepts **either** *percentOff* or *amountOffInCents*. If both are given,
*percentOff* will be used.

## Examples

```js
var discountable = require('discountable');
discountable(10, 100); // => 0
discountable(10, 50); // => 5
discountable(10, null, 6); // => 4
discountable(10, null, 11); // => 0
discountable(10, null, 5.5); // => 4.5
```

## LICENSE

MIT
