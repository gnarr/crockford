# Crockford Base32 number
[![Build Status][1]][2]
[![Coverage Status][3]][4]
[![npm][5]][6]
[![dependencies Status][7]][8]
[![devDependencies Status][9]][10]
[![Downloads/week][11]][12]
[![Dependabot Status][13]][14]

[1]: https://www.travis-ci.com/gnarr/crockford.svg?branch=main
[2]: https://www.travis-ci.com/gnarr/crockford
[3]: https://coveralls.io/repos/github/gnarr/crockford/badge.svg?branch=main
[4]: https://coveralls.io/github/gnarr/crockford?branch=main
[5]: https://img.shields.io/npm/v/crockford.svg?style=flat-square
[6]: https://www.npmjs.com/package/crockford
[7]: https://david-dm.org/gnarr/crockford.svg
[8]: https://david-dm.org/gnarr/crockford
[9]: https://david-dm.org/gnarr/crockford/dev-status.svg
[10]: https://david-dm.org/gnarr/crockford?type=dev
[11]: https://img.shields.io/npm/dw/crockford.svg
[12]: https://www.npmjs.com/package/crockford
[13]: https://api.dependabot.com/badges/status?host=github&repo=gnarr/crockford
[14]: https://dependabot.com

A simple util for encoding and decoding numbers as Crockford Base32 strings.

## Installation

### Node.js

    $ npm install crockford-base32-number

## Example usage:

```javascript
const { toBase32, fromBase32 } = require("crockford-base32-number");
const asBase32 = toBase32(1337);
console.log(asBase32);
const asNumber = fromBase32(asBase32);
console.log(asNumber);
```
