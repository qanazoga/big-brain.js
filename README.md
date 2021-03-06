# Functions that every big brain language already has.

### Ranges
```js
const { range } = require('big-brain.js');

/**
 * Can be used to make loops
 */
for (let i of range(3)) {
	console.log(`hello from loop ${i}`);
}
// hello from loop 0
// hello from loop 1
// hello from loop 2

/**
 * Ranges to Arrays
 */
Array.from(range(12));
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

Array.from(range(11, 18));
// [ 11, 12, 13, 14, 15, 16, 17 ]

Array.from(range(10, 0));
// [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

Array.from(range(0, 20, 2));
// [0,  2,  4,  6,  8, 10, 12, 14, 16, 18]
```

### Random Integers (without having to write the function yourself each time)  
*(I always forget how it goes :c)*
```js
const { randInt } = require('big-brain.js');

randInt(100);
// 40

randInt(1, 5);
// 3

/**
 * Random enough for general purpose
 */
let ints = [];
for (let i of range(10000000)) {
	ints.push(randInt(1, 11));
}

/**
 * Should be 5.5
 */
ints.reduce((previous, current) => current += previous) / ints.length;
// 5.5007626

```

### Random choice from array
```js
const { randChoice } = require('big-brain.js');

const presidents = ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison', 'James Monroe'];

randChoice(presidents);
// 'John Adams'
```

### Shuffle arrays
*(this doesn't mutate the array)*
```js
const { shuffleArray } = require('big-brain.js');

let presidents = ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison', 'James Monroe'];

shuffleArray(presidents);
// ['James Monroe', 'George Washington', 'James Madison', 'John Adams', 'Thomas Jefferson']

/**
 * Note that the original array is still in order
 */
presidents
// ['George Washington', 'John Adams', 'Thomas Jefferson', 'James Madison', 'James Monroe']

/**
 * To permanently rearrange, reassign:
 */
presidents = shuffleArray(presidents);
// ['James Monroe', 'Thomas Jefferson', 'George Washington', 'John Adams', 'James Madison']
```