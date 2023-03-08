const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

// function fn(impl) {
//   const mockFn = ()
// }

const originalGetWinner = utils.getWinner;
utils.winner = (p1, p2) => p1;

const winner = thumbWar('Austin Akers', 'Kent C. Dodds');
assert.strictEqual(winner, 'Austin Akers');

utils.getWinner = originalGetWinner;